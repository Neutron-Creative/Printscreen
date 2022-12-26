/**
 * This represents a query coming in from a user.
 */
import {Constants} from "./constants";

export class PageresQuery {
    url: string;
    sizes: string[];
    ttl: number = Constants.DEFAULT_TTL;
    nocache: boolean = false;
    options: Options;

    constructor(query: any) {
        if (!query.url)
            throw new URIError("Url parameter must be defined.");

        if (!query.size)
            throw new URIError("Size parameter must be defined.");

        this.url = query.url;
        this.sizes = [query.size];
        this.ttl = query.ttl ?? this.ttl;
        this.nocache = query.nocache ?? this.nocache;

        this.options = new Options();
        this.options.delay = Number.parseFloat(query.delay) ?? this.options.delay;
        this.options.timeout = Number.parseFloat(query.timeout) ?? this.options.timeout;
        this.options.crop = query.crop ?? this.options.crop;
        this.options.css = query.css ?? this.options.css;
        this.options.script = query.script ?? this.options.script;
        this.options.cookies = query.cookies ?? this.options.cookies;
        this.options.filename = query.filename ?? this.options.filename;
        this.options.incrementalName = query.incrementalName ?? this.options.incrementalName;
        this.options.selector = query.selector ?? this.options.selector;
        this.options.hide = query.hide ?? this.options.hide;
        this.options.username = query.username ?? this.options.username;
        this.options.password = query.password ?? this.options.password;
        this.options.scale = Number.parseFloat(query.scale) ?? this.options.scale;
        this.options.format = query.format ?? this.options.format;
        this.options.userAgent = query.userAgent ?? this.options.userAgent;
        this.options.transparent = query.transparent ?? this.options.transparent;

        // Validate
        if (this.ttl < 0 || this.ttl > Constants.MAX_TTL) {
            this.ttl = Constants.DEFAULT_TTL;
        }
    }
}

/**
 * This class is a 1:1 mapping of the documentation of options from https://github.com/sindresorhus/pageres
 */
class Options {
    delay: number = 0;
    timeout: number = 60;
    crop: boolean = false;
    css: string = "";
    script: string = "";
    cookies: Array<string | object> = new Array<string | object>();
    filename: string = "";
    incrementalName: boolean = false;
    selector: string = "";
    hide: string[] = [];
    username: string = "";
    password: string = "";
    scale: number = 1;
    format: string = "png";
    userAgent: string = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36";
    transparent: boolean = false;

    asObject(): Object {
        return Object.assign({}, this);
    }
}
