'use strict';

const Base = require('./Base');
const TextBasedChannel = require('./interfaces/TextBasedChannel');
const { Error } = require('../errors');
const SnowflakeUtil = require('../util/SnowflakeUtil');
const UserFlags = require('../util/UserFlags');

/**
 * Represents a user on Discord.
 * @implements {TextBasedChannel}
 * @extends {Base}
 */
class User extends Base {
  constructor(client, data) {
    super(client);

    /**
     * The user's id
     * @type {Snowflake}
     */
    this.id = data.id;

    this.bot = null;

    this.system = null;

    this.flags = null;
    this.lastManaged = new Date().getTime();

    this._patch(data);
  }

  _patch(data) {
    this.lastManaged = new Date().getTime();

    if ('username' in data) {
      /**
       * The username of the user
       * @type {?string}
       */
      this.username = data.username;
    } else {
      this.username ??= null;
    }

    if ('bot' in data) {
      /**
       * Whether or not the user is a bot
       * @type {?boolean}
       */
      this.bot = Boolean(data.bot);
    } else if (!this.partial && typeof this.bot !== 'boolean') {
      this.bot = false;
    }

    if ('discriminator' in data) {
      /**
       * A discriminator based on username for the user
       * @type {?string}
       */
      this.discriminator = data.discriminator;
    } else {
      this.discriminator ??= null;
    }

    /* I if ('avatar' in data) {
      this.avatar = data.avatar;
    } else {
      this.avatar ??= null;
    }
    if ('banner' in data) {
      this.banner = data.banner;
    } else if (this.banner !== null) {
      this.banner ??= undefined;
    }
    /* A if ('accent_color' in data) {
      this.accentColor = data.accent_color;
    } else if (this.accentColor !== null) {
      this.accentColor ??= undefined;

    if ('system' in data) {
      this.system = Boolean(data.system);
    } else if (!this.partial && typeof this.system !== 'boolean') {
      this.system = false;
    }*/

    if ('public_flags' in data) {
      /**
       * The flags for this user
       * @type {?UserFlags}
       */
      this.flags = new UserFlags(data.public_flags);
    }
  }

  /**
   * Whether this User is a partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return typeof this.username !== 'string';
  }

  /**
   * The timestamp the user was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return SnowflakeUtil.timestampFrom(this.id);
  }

  /**
   * The time the user was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * A link to the user's avatar.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  avatarURL({ format, size, dynamic } = {}) {
    if (!this.avatar) return null;
    return this.client.rest.cdn.Avatar(this.id, this.avatar, format, size, dynamic);
  }

  /**
   * A link to the user's default avatar
   * @type {string}
   * @readonly
   */
  get defaultAvatarURL() {
    return this.client.rest.cdn.DefaultAvatar(this.discriminator % 5);
  }

  /**
   * A link to the user's avatar if they have one.
   * Otherwise a link to their default avatar will be returned.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {string}
   */
  displayAvatarURL(options) {
    return this.avatarURL(options) ?? this.defaultAvatarURL;
  }

  /**
   * The hexadecimal version of the user accent color, with a leading hash
   * <info>The user must be force fetched for this property to be present</info>
   * @type {?string}
   * @readonly
   */
  get hexAccentColor() {
    if (typeof this.accentColor !== 'number') return this.accentColor;
    return `#${this.accentColor.toString(16).padStart(6, '0')}`;
  }

  /**
   * A link to the user's banner.
   * <info>This method will throw an error if called before the user is force fetched.
   * See {@link User#banner} for more info</info>
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  bannerURL({ format, size, dynamic } = {}) {
    if (typeof this.banner === 'undefined') throw new Error('USER_BANNER_NOT_FETCHED');
    if (!this.banner) return null;
    return this.client.rest.cdn.Banner(this.id, this.banner, format, size, dynamic);
  }

  /**
   * The Discord "tag" (e.g. `hydrabolt#0001`) for this user
   * @type {?string}
   * @readonly
   */
  get tag() {
    return typeof this.username === 'string' ? `${this.username}#${this.discriminator}` : null;
  }

  /**
   * The DM between the client's user and this user
   * @type {?DMChannel}
   * @readonly
   */
  get dmChannel() {
    return this.client.channels.cache.find(c => c.type === 'DM' && c.recipient.id === this.id) ?? null;
  }

  /**
   * Creates a DM channel between the client and the user.
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<DMChannel>}
   */
  async createDM(force = false) {
    if (!force) {
      const { dmChannel } = this;
      if (dmChannel && !dmChannel.partial) return dmChannel;
    }

    const data = await this.client.api.users(this.client.user.id).channels.post({
      data: {
        recipient_id: this.id,
      },
    });
    return this.client.channels._add(data);
  }

  /**
   * Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.
   * @returns {Promise<DMChannel>}
   */
  async deleteDM() {
    const { dmChannel } = this;
    if (!dmChannel) throw new Error('USER_NO_DM_CHANNEL');
    await this.client.api.channels(dmChannel.id).delete();
    this.client.channels._remove(dmChannel.id);
    return dmChannel;
  }

  /**
   * Checks if the user is equal to another.
   * It compares id, username, discriminator, avatar, banner, accent color, and bot flags.
   * It is recommended to compare equality by using `user.id === user2.id` unless you want to compare all properties.
   * @param {User} user User to compare with
   * @returns {boolean}
   */
  equals(user) {
    return (
      user &&
      this.id === user.id &&
      this.username === user.username &&
      this.discriminator === user.discriminator &&
      this.avatar === user.avatar &&
      this.flags?.bitfield === user.flags?.bitfield &&
      this.banner === user.banner &&
      this.accentColor === user.accentColor
    );
  }

  /**
   * Compares the user with an API user object
   * @param {APIUser} user The API user object to compare
   * @returns {boolean}
   * @private
   */
  _equals(user) {
    return (
      user &&
      this.id === user.id &&
      this.username === user.username &&
      this.discriminator === user.discriminator &&
      this.avatar === user.avatar &&
      this.flags?.bitfield === user.public_flags &&
      ('banner' in user ? this.banner === user.banner : true) &&
      ('accent_color' in user ? this.accentColor === user.accent_color : true)
    );
  }

  /**
   * Fetches this user's flags.
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<UserFlags>}
   */
  async fetchFlags(force = false) {
    if (this.flags && !force) return this.flags;
    const data = await this.client.api.users(this.id).get();
    this._patch(data);
    return this.flags;
  }

  /**
   * Fetches this user.
   * @param {boolean} [force=true] Whether to skip the cache check and request the API
   * @returns {Promise<User>}
   */
  fetch(force = true) {
    return this.client.users.fetch(this.id, { force });
  }

  /**
   * When concatenated with a string, this automatically returns the user's mention instead of the User object.
   * @returns {string}
   * @example
   * // Logs: Hello from <@123456789012345678>!
   * console.log(`Hello from ${user}!`);
   */
  toString() {
    return `<@${this.id}>`;
  }

  toJSON(...props) {
    const json = super.toJSON(
      {
        createdTimestamp: true,
        defaultAvatarURL: true,
        hexAccentColor: true,
        tag: true,
      },
      ...props,
    );
    json.avatarURL = this.avatarURL();
    json.displayAvatarURL = this.displayAvatarURL();
    json.bannerURL = this.banner ? this.bannerURL() : this.banner;
    return json;
  }

  // These are here only for documentation purposes - they are implemented by TextBasedChannel
  /* eslint-disable no-empty-function */
  send() {}
}

TextBasedChannel.applyToClass(User);

module.exports = User;

/**
 * @external APIUser
 * @see {@link https://discord.com/developers/docs/resources/user#user-object}
 */
