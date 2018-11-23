// Type definitions for Apache Cordova InAppBrowserWithShareButtonIOS plugin
// Project: https://github.com/joehui/cordova-plugin-inappbrowser-with-share-button-ios
// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies Inc
// Licensed under the MIT license.

interface Window {
    /**
     * Opens a URL in a new InAppBrowserWithShareButtonIOS instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowserWithShareButton. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: "_self", options?: string): InAppBrowserWithShareButton;
    /**
     * Opens a URL in a new InAppBrowserWithShareButton instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowserWithShareButton. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: "_blank", options?: string): InAppBrowserWithShareButton;
    /**
     * Opens a URL in a new InAppBrowserWithShareButton instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowserWithShareButton. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: "_system", options?: string): InAppBrowserWithShareButton;
    /**
     * Opens a URL in a new InAppBrowserWithShareButton instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowserWithShareButton. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    open(url: string, target?: string, options?: string, replace?: boolean): InAppBrowserWithShareButton;
}

/**
 * The object returned from a call to window.open.
 * NOTE: The InAppBrowserWithShareButton window behaves like a standard web browser, and can't access Cordova APIs.
 */
interface InAppBrowserWithShareButton extends Window {
    onloadstart: (type: InAppBrowserWithShareButtonEvent) => void;
    onloadstop: (type: InAppBrowserWithShareButtonEvent) => void;
    onloaderror: (type: InAppBrowserWithShareButtonEvent) => void;
    onexit: (type: InAppBrowserWithShareButtonEvent) => void;
    onshare: (type: InAppBrowserWithShareButtonEvent) => void;
    // addEventListener overloads
    /**
     * Adds a listener for an event from the InAppBrowserWithShareButton.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    addEventListener(type: "loadstart", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowserWithShareButton.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    addEventListener(type: "loadstop", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowserWithShareButton.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    addEventListener(type: "loaderror", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowserWithShareButton.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    addEventListener(type: "exit", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowserWithShareButton.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     *					share: vent fires when the share button is clicked.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    addEventListener(type: "share", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Adds a listener for an event from the InAppBrowserWithShareButton.
     * @param type      the event to listen for
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an Event object as a parameter.
     */
    addEventListener(type: string, callback: (event: Event) => void): void;
    // removeEventListener overloads
    /**
     * Removes a listener for an event from the InAppBrowserWithShareButton.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    removeEventListener(type: "loadstart", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowserWithShareButton.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    removeEventListener(type: "loadstop", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowserWithShareButton.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    removeEventListener(type: "loaderror", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowserWithShareButton.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    removeEventListener(type: "exit", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowserWithShareButton.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
	 *				    share: vent fires when the share button is clicked.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an InAppBrowserWithShareButtonEvent object as a parameter.
     */
    removeEventListener(type: "share", callback: (event: InAppBrowserWithShareButtonEvent) => void): void;
    /**
     * Removes a listener for an event from the InAppBrowserWithShareButton.
     * @param type      The event to stop listening for.
     *                  loadstart: event fires when the InAppBrowserWithShareButton starts to load a URL.
     *                  loadstop: event fires when the InAppBrowserWithShareButton finishes loading a URL.
     *                  loaderror: event fires when the InAppBrowserWithShareButton encounters an error when loading a URL.
     *                  exit: event fires when the InAppBrowserWithShareButton window is closed.
     * @param callback  the function that executes when the event fires. The function is
     *                  passed an Event object as a parameter.
     */
    removeEventListener(type: string, callback: (event: Event) => void): void;
    /** Closes the InAppBrowserWithShareButton window. */
    close(): void;
    /** Hides the InAppBrowserWithShareButton window. Calling this has no effect if the InAppBrowserWithShareButton was already hidden. */
    hide(): void;
    /**
     * Displays an InAppBrowserWithShareButton window that was opened hidden. Calling this has no effect
     * if the InAppBrowserWithShareButton was already visible.
     */
    show(): void;
    /**
     * Injects JavaScript code into the InAppBrowserWithShareButton window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the JavaScript code is injected.
     *                  If the injected script is of type code, the callback executes with
     *                  a single parameter, which is the return value of the script, wrapped in an Array.
     *                  For multi-line scripts, this is the return value of the last statement,
     *                  or the last expression evaluated.
     */
    executeScript(script: { code: string }, callback: (result: any) => void): void;
    /**
     * Injects JavaScript code into the InAppBrowserWithShareButton window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the JavaScript code is injected.
     *                  If the injected script is of type code, the callback executes with
     *                  a single parameter, which is the return value of the script, wrapped in an Array.
     *                  For multi-line scripts, this is the return value of the last statement,
     *                  or the last expression evaluated.
     */
    executeScript(script: { file: string }, callback: (result: any) => void): void;
    /**
     * Injects CSS into the InAppBrowserWithShareButton window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: { code: string }, callback: () => void): void;
    /**
     * Injects CSS into the InAppBrowserWithShareButton window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @param callback  The function that executes after the CSS is injected.
     */
    insertCSS(css: { file: string }, callback: () => void): void;
}

interface InAppBrowserWithShareButtonEvent extends Event {
    /** the eventname, either loadstart, loadstop, loaderror, or exit. */
    type: string;
    /** the URL that was loaded. */
    url: string;
    /** the error code, only in the case of loaderror. */
    code: number;
    /** the error message, only in the case of loaderror. */
    message: string;
}
