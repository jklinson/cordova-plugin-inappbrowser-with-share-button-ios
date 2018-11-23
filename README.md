---
title: InappbrowserWithShareButtonIOS
description: Open an in-app browser window.
---

# cordova-plugin-inappbrowser-with-share-button-ios

Repository is a fork of [this plugin](https://github.com/joehui/cordova-plugin-inappbrowser-with-share-button).

This plugin just add the share button on the bottom of the toolbar. You can get the share button event by giving the 
code as per given below. 

```
var shareInAppRef = cordova.InAppBrowserWithShareButton.open(url, '_blank', 'location=no');
shareInAppRef.addEventListener('share', function(){
    shareInAppRef.close();
    // You can use custom function for sharing.
});

```


### Supported Platforms

- iOS




