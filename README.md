VideoAds.js
<br />
**HTML5 &amp; JavaScript Video Advertising plugin for MediaElements.js**

##### [See VideoAds.js example](http://kamilczujowski.github.io/VideoAds)

## How to install:

1. Download [VideoAds.js example](http://kamilczujowski.github.io/VideoAds/example.zip)

2. Insert the following code before end of ```</head>```-tag

    ```html
    <!-- VideoAds.js CSS-file -->
    <link href="css/videoads.min.css" rel="stylesheet" />
    <!-- MediaElements.js CSS-file -->
    <link href="css/mejs-skins.css" rel="stylesheet" />
    <!-- Styles for AD -->
    <style>
        /* Default styles for your Ad */
        #ad1 {
            bottom: 30px;
            left: 130px;

            width: 728px;
            height: 90px;
        }
    </style>
    ```
You can change the ID's for your AD
<br />
Default ID for the first Advertising is **'#ad1'**

3. Insert the following code right after the ```<body>```-tag

    ```html
    <!-- HTML5 Video Tag -->
    <video width="960" height="540">
        <source src="out/media/video/echo-hereweare.mp4" type="video/mp4" />
        <source src="out/media/video/echo-hereweare.webm" type="video/webm" />
    </video>
    ```

4. Insert the Advertising DIV after the ```</video>```-tag
    ```html
    <div class="ads" id="ad1" data-enable-time="1" data-disable-time="30">
        Your AD comes here
    </div>
    ``` 

5. Insert the following code before end of ```</body>```-tag
     ```html
    <!-- jQuery library -->
    <script src="out/js/lib/jquery.js"></script>
    <!-- MediaElements.js library --> 
    <script src="out/js/lib/mediaelement-and-player.min.js"></script>
    <!-- VideoAds.js library --> 
    <script src="out/js/videoads.min.js"></script>
    ``` 

## Controlling:
To show and hide the advertiment in your video please use the follow  ```data```-elements:
<br />
Show your Advertising at 00:01: ```data-enable-time="1"```
<br />
Hide your Advertising at 00:30: ```data-disable-time="30"```


## Changelog
No changes till now

## Copyright
Made with ♥ by [Kamil Czujowski](https://twitter.com/kamilczujowski) and [Sergej Müller](http://wpcoder.de)
<br />
© 2013 Hamburg, Germany
<br /> 
Latest Verstion: 1.0
<br />
[The MIT License](http://opensource.org/licenses/mit-license)
