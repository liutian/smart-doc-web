
export let articleMock = {};

articleMock[35] = `<h2 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid rgb(234, 236, 239); color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    简介
</h2>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    微企微上客 iOS SDK 是客服系统访客端的解决方案，既包含了客服聊天逻辑管理，也提供了聊天界面，开发者可方便的将客服功能集成到自己的 APP 中。iOS SDK 支持 iOS 8 以上版本，同时支持iPhone、iPad以及横竖屏UI。在iOS 9.2 以上版本中支持 IPv6，能正常通过苹果审核。
</p>
<h2 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid rgb(234, 236, 239); color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#sdk-目录讲解" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>SDK 目录讲解
</h2>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    下载完 微上客 SDK，得到如下两部分：
</p>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p>
            WSKChatSDK.framework：静态库Framework,包含静态库文件和SDK的头文件
        </p>
    </li>
    <li>
        <p>
            WSKResource.bundle：SDK的资源文件包
        </p>
    </li>
</ul>
<blockquote style="box-sizing: border-box; margin: 0px 0px 16px; padding: 0px 1em; color: rgb(106, 115, 125); border-left: 0.25em solid rgb(223, 226, 229); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;">
        由于 SDK 是静态库，且为了方便开发者使用，我们将 i386、x86_64、armv7、arm64 平台的静态库合并成一个 Fat Library ，导致整个 SDK 比较大。但实际编译后大约只会增加 app 2-3M 大小
    </p>
</blockquote>
<h2 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid rgb(234, 236, 239); color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#系统要求以及依赖第三方框架" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>系统要求以及依赖第三方框架
</h2>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            系统要求<br/>该项目最低支持 iOS 8.0 和 Xcode 8.0。
        </p>
    </li>
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            依赖第三方框架<br/>微上客SDK 依赖&nbsp;<a href="https://github.com/socketio/socket.io-client-swift" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none;">Socket.IO-Client-Swift</a>&nbsp;库，如果选择手动集成微上客SDK则需要用CocoaPods引入Socket.IO库，选择CocoaPods集成则不需要手动添加依赖处理。
        </p>
    </li>
</ul>
<h2 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid rgb(234, 236, 239); color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#sdk-集成和配置" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>SDK 集成和配置
</h2>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#手动集成" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>手动集成
</h3>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            下载 微上客 SDK，得到一个 WSKChatSDK.framework 文件、 WSKResource.bundle 文件夹，将他们导入工程
        </p>
    </li>
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            添加 微上客 SDK 依赖库
        </p>
    </li>
    <ul style="list-style-type: square;" class=" list-paddingleft-2">
        <li>
            <p>
                UIKit.framework
            </p>
        </li>
        <li>
            <p>
                MobileCoreService.framework
            </p>
        </li>
        <li>
            <p>
                SystemConfiguration.framework
            </p>
        </li>
        <li>
            <p>
                AVFoundation.framwork
            </p>
        </li>
        <li>
            <p>
                CoreGraphics.framework
            </p>
        </li>
        <li>
            <p>
                ImageIO.framework
            </p>
        </li>
        <li>
            <p>
                CoreFoundation.framework
            </p>
        </li>
        <li>
            <p>
                UserNotifications.framework
            </p>
        </li>
        <li>
            <p>
                libstdc++.6.0.9.tbd
            </p>
        </li>
    </ul>
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            添加第三方库：在Podfile中添加Socket.IO的依赖， pod &#39;Socket.IO-Client-Swift&#39;, &#39;~&gt; 8.1.2&#39;
        </p>
    </li>
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            在 Build Settings -&gt; Other Linker Flags 中添加 -ObjC
        </p>
    </li>
</ul>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#cocoapods集成" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>CocoaPods集成
</h3>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    在 Podfile 文件中加入&nbsp;<code style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; padding: 0.2em 0px; margin: 0px; background-color: rgba(27, 31, 35, 0.0470588); border-radius: 3px;">pod &#39;WSK_iOS_SDK&#39;</code>
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 16px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; color: rgb(36, 41, 46);">platform :ios, &#39;8.0&#39;      
use_frameworks!		#必须加入这一句，因为有依赖swift库

target &#39;YourApp&#39; do
    pod &#39;WSK_iOS_SDK&#39;, &#39;~&gt; 1.0&#39; 
end</pre>
<blockquote style="box-sizing: border-box; margin: 0px 0px 16px; padding: 0px 1em; color: rgb(106, 115, 125); border-left: 0.25em solid rgb(223, 226, 229); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0px;">
        推荐使用CocoaPods集成，在Podfile中加入 WSK_iOS_SDK 的引用即可
    </p>
</blockquote>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#配置工程" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>配置工程
</h3>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p>
            允许App支持Http传输方法，由于SDK与服务器之间有部分请求使用的是http。在Info.plist中加入以下内容：
        </p>
    </li>
</ul>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 16px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; color: rgb(36, 41, 46);">	&lt;key&gt;NSAppTransportSecurity&lt;/key&gt;
	&lt;dict&gt;
		&lt;key&gt;NSAllowsArbitraryLoads&lt;/key&gt;
		&lt;true/&gt;
	&lt;/dict&gt;</pre>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p>
            iOS10 权限设置,在Info.plist中加入以下内容：
        </p>
    </li>
</ul>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 16px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; color: rgb(36, 41, 46);">   &lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
   &lt;string&gt;App需要您的同意,才能访问相机&lt;/string&gt;  
   &lt;key&gt;NSMicrophoneUsageDescription&lt;/key&gt;  
   &lt;string&gt;App需要您的同意,才能访问麦克风&lt;/string&gt;  
   &lt;key&gt;NSPhotoLibraryUsageDescription&lt;/key&gt;  
   &lt;string&gt;App需要您的同意,才能访问相册&lt;/string&gt;</pre>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p>
            SDK 不支持 bitcode<br/>向 Build Settings → Linking → Enable Bitcode 中设置 NO。
        </p>
    </li>
</ul>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#集成遇到问题请参考-faq" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>集成遇到问题，请参考&nbsp;<a class="link" href="#/view/manual/article?site=1&amp;manual=2&amp;articleId=38#top-anchor">FAQ</a>
</h3>
<h2 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid rgb(234, 236, 239); color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#使用详解" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>使用详解
</h2>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#使用简介" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>使用简介
</h3>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p>
            在需要使用 SDK 的地方 #import &lt;WSKChatSDK/WSKChatSDK.h&gt;。WSKSDK 类是整个SDK的唯一主入口，是一个单例。各个函数简介：
        </p>
    </li>
</ul>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	初始化：
		- (void)registerAppKey:(NSString *)appKey appName:(NSString *)appName;
		
	集成客户聊天组件：
		- (WSKChatViewController *)chatViewController;
		
	自定义客户端聊天组件UI效果：
		- (WSKUIConfig *)customUIConfig;
		
	APNs推送：
		- (void)updateApnsToken:(NSData *)token;
		
	注销：
		- (void)logout:(WSKCompletionBlock)completion;

	设置用户信息：
		- (void)setUserInfo:(WSKUserVo *)userVo;

	设置调试模式获取更多的Log信息，发布应用时建议不开启，用于节省性能开销：
		- (void)setDebugMode;		</pre>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#初始化" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>初始化
</h3>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	- (BOOL)application:(UIApplication *)application 
							didFinishLaunchingWithOptions:(NSDictionary *)launchOptions 
	{
		......
		
		[[WSKSDK sharedSDK] registerAppKey:appKey appName:App名称];
	    
	    ......	    
	    return YES;
	}</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    appKey 可以通过公司管理员账号登录 “微上客Web端” -&gt; “配置” -&gt; “App Sdk设置” -&gt; “App Key：渠道appKey” 找到, appName对应添加一个 app 时填写的 App 名称， 详细步骤请参见&nbsp;<a class="link" href="#/view/manual/article?site=1&amp;manual=2&amp;articleId=37#top-anchor">新建App和上传推送证书</a>
</p>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#设置用户信息" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>设置用户信息
</h3>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    设置个人信息，用户帐号登录成功之后，调用设置用户信息函数（userID必填，建议同时设置用户昵称（userName））。如果不设置用户信息，则使用匿名用户的方式进行客服咨询。应该在进入聊天咨询界面之前设置用户信息。
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	WSKUserVo *userVo = [[WSKUserVo alloc]init];
	userVo.userID = @&quot;45471429666&quot;;      //用户标识,必填
	userVo.userName = @&quot;iOS_SDK_用户1&quot;;   //用户昵称
	userVo.headerImageURL = @&quot;http://visionet.findest.com/letsdesk/assets/img/logo-1.png&quot;;  //用户头像
    userVo.gender = 1;  //性别,1：男、2：女
    userVo.phoneNumber = @&quot;18611111111&quot;;  //手机
    userVo.telephone = @&quot;021-12345678&quot;;  //固定电话
    userVo.email = @&quot;71232131@qq.com&quot;;  //邮箱
    
    userVo.address = @&quot;上海市长宁区&quot;;  //地址
    userVo.position = @&quot;人事经理&quot;;  //职位
    userVo.department = @&quot;人事部&quot;;  //单位
    userVo.birthday = @&quot;1988-12-12&quot;;  //生日(yyyy-MM-dd)
    userVo.remark = @&quot;备注SDK&quot;;  //备注
	[[WSKSDK sharedSDK] setUserInfo:userVo];</pre>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#集成客户聊天组件" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>集成客户聊天组件
</h3>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	[[WSKSDK sharedSDK] chatViewController];</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    应用层获取此 chatViewController 之后，必须嵌入到 UINavigationcontroller 中，就可以获得聊天窗口的UI以及所有功能。 chatViewController 只会使用到导航栏的 self.navigationItem.title。 self.navigationItem.title 放置标题栏； 必须注意，不能在 chatViewController 外层套其他 viewController 之后再嵌入到 UINavigationcontroller。
</p>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    如果调用代码所在的viewController在UINavigationcontroller中，可以如下方式集成（第一种集成方式）：
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">    WSKChatViewController *chatViewController = [[WSKSDK sharedSDK] chatViewController];
    chatViewController.chatTitle = @&quot;微上客SDK测试&quot;;
    chatViewController.hidesBottomBarWhenPushed = YES;
    [self.navigationController pushViewController: chatViewController animated:YES];</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    如果调用代码所在的viewController不在UINavigationcontroller中，可如下方式集成（第二种集成方式）：
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">    WSKChatViewController *chatViewController = [[WSKSDK sharedSDK] chatViewController];
    chatViewController.chatTitle = @&quot;微上客SDK测试&quot;;
    chatViewController.hidesBottomBarWhenPushed = YES;
    
    UINavigationController *navController  = [[UINavigationController alloc] initWithRootViewController:chatViewController];
    [self presentViewController:navController animated:YES completion:nil];</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    一般来说，第二种方式会需要在左上角加一个返回按钮，在 “initWithRootViewController:chatViewController” 之前加上：
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">    chatViewController.navigationItem.leftBarButtonItem = 
    			[[UIBarButtonItem alloc] initWithTitle:@&quot;返回&quot; style:UIBarButtonItemStyleBordered 
    								target:self action:@selector(onBack:)];</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    “onBack” 的样例：
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">- (void)onBack:(id)sender {
    [self dismissViewControllerAnimated:YES completion:nil];
}</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    如果您的代码要求所有viewController继承某个公共基类，并且公共基类对UINavigationController统一做了某些处理；或者其他原因导致使用第一种方式集成会有问题；这些情况下，建议您使用第二种方式集成。
</p>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#监控sdk内的链接跳转动作" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>监控SDK内的链接跳转动作
</h3>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    在WSKChatViewController控制器中设置链接跳转的监听block即可<br/>如果block返回为NO,则不执行SDK默认处理.如果block返回为YES则执行SDK默认跳转处理：
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">/** *  提供了监控SDK内消息跳转行为的block; *  如果设置了block回调，则在链接点击之后执行该block *  如果block返回为NO,则不执行SDK默认处理.如果block返回为YES则执行SDK默认跳转处理 */typedef BOOL (^WSKLinkClickBlock)(NSString *linkAddress);@interface WSKChatViewController : UIViewController.../** *  监控SDK内消息跳转行为的block * *  @return 是否执行SDK默认的跳转行为 */@property (nonatomic, copy) WSKLinkClickBlock linkClickBlock;

...@end</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    参考代码：
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">//启动聊天界面WSKChatViewController *chatViewController = [[WSKSDK sharedSDK] chatViewController];
chatViewController.chatTitle = @&quot;微上客SDK测试&quot;;//设置回调chatViewController.linkClickBlock = ^(NSString *urlString) {
    ViewController2 *viewController2 = [[UIStoryboard storyboardWithName:@&quot;Main&quot; bundle:[NSBundle mainBundle]] instantiateViewControllerWithIdentifier:@&quot;ViewController2&quot;];
    [self.navigationController pushViewController:viewController2 animated:YES];    return NO;
};</pre>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#自定义客户端聊天组件ui效果" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>自定义客户端聊天组件UI效果
</h3>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    获取自定义UI类对象
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	[[WSKSDK sharedSDK] customUIConfig];</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    WSKUIConfig是负责自定义UI的类；目前主要是定义聊天界面中的字体颜色、气泡图片、头像等。相关设置必须在集成客户聊天组件之前进行。 WSKUIConfig 只是负责替换部分皮肤相关内容，不包含所有的图片素材的替换,调整UI样例代码：
</p>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	/**	 *  访客文本消息字体颜色	 */
    [[WSKSDK sharedSDK] customUIConfig].customMessageTextColor = [UIColor blackColor];    
    /**	 *  客服文本消息字体颜色	 */
    [[WSKSDK sharedSDK] customUIConfig].serviceMessageTextColor = [UIColor blackColor];    
    /**	 *  客户文本消息内嵌链接字体颜色	 */
	[[WSKSDK sharedSDK] customUIConfig].customMessageLinkTextColor = [UIColor colorWithRed:128.0/255.0 green:233.0/255.0 blue:255.0/255.0 alpha:1.0];	
	/**	 *  客服文本消息内嵌链接字体颜色	 */
	[[WSKSDK sharedSDK] customUIConfig].serviceMessageLinkTextColor = [UIColor colorWithRed:0.0/255.0 green:165.0/255.0 blue:224.0/255.0 alpha:1.0];    
    /** 	 *  提示文本消息字体颜色 	 */
	[[WSKSDK sharedSDK] customUIConfig].tipMessageTextColor = [UIColor grayColor];	/**	 *  提示文本消息背景颜色	 */
	[[WSKSDK sharedSDK] customUIConfig].tipMessageBackgroundColor = [UIColor whiteColor];    
    /**	 *  输入框文本消息字体颜色	 */
	[[WSKSDK sharedSDK] customUIConfig].inputTextColor = [UIColor blackColor];	/**	 *  消息时间颜色	 */
	[[WSKSDK sharedSDK] customUIConfig].messageTimeColor = [UIColor grayColor];	/**	 *  消息tableview的背景图片	 */
    UIImageView *imageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@&quot;chat_bg&quot;]];
    imageView.contentMode = UIViewContentModeScaleToFill;
    [[WSKSDK sharedSDK] customUIConfig].chatBackground = imageView;    
   /** 	 *  客户头像URL,优先使用URL加载图片 	 */
    [[WSKSDK sharedSDK] customUIConfig].customerHeadURL = [NSURL URLWithString:@&quot;http://visionet.findest.com/letsdesk/assets/img/logo-1.png&quot;];    
	/**	 *  客户头像	 */
    [[WSKSDK sharedSDK] customUIConfig].customerHeadImage = [UIImage imageNamed:@&quot;customer_avatar&quot;];    
    /**	 *  客户消息气泡normal图片	 */
    [[WSKSDK sharedSDK] customUIConfig].customerMessageBubbleNormalImage = 
										[[UIImage imageNamed:@&quot;chat_send_text_bk&quot;]                                 resizableImageWithCapInsets:UIEdgeInsetsMake(26,26,26,26)                                 resizingMode:UIImageResizingModeStretch];                                 
    /**	 *  客户消息气泡pressed图片	 */
    [[WSKSDK sharedSDK] customUIConfig].customerMessageBubblePressedImage = 
    									[[UIImage imageNamed:@&quot;chat_send_text_press_bk&quot;]                                  resizableImageWithCapInsets:UIEdgeInsetsMake(26,26,26,26)                                  resizingMode:UIImageResizingModeStretch];                                  
	/**	 *  客服消息气泡normal图片	 */
    [[WSKSDK sharedSDK] customUIConfig].serviceMessageBubbleNormalImage = 
    									[[UIImage imageNamed:@&quot;chat_receive_text_bk&quot;]                                  resizableImageWithCapInsets:UIEdgeInsetsMake(26,26,26,26)                                  resizingMode:UIImageResizingModeStretch];                                  
    /**	 *  客服消息气泡pressed图片	 */
    [[WSKSDK sharedSDK] customUIConfig].serviceMessageBubblePressedImage = 
    									[[UIImage imageNamed:@&quot;chat_receive_text_press_bk&quot;]                                  resizableImageWithCapInsets:UIEdgeInsetsMake(26,26,26,26)                                  resizingMode:UIImageResizingModeStretch];    
	/**	 *  默认是YES,默认进入聊天界面，是文本输入模式的话，会弹出键盘，设置为NO，可以修改为不弹出	 */
    [WSKUIConfig sharedInstance].isShowKeyboard = YES;</pre>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#apns推送" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>APNs推送
</h3>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            <a href="#/view/manual/article?site=1&amp;manual=2&amp;articleId=36#top-anchor" class="link">制作推送证书并在微上客网站配置</a>
        </p>
    </li>
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            请开启Application Target的Capabilities-&gt;Push Notifications选项，如图：<br/><a href="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/capabilities_intro.png" target="_blank" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none;"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/capabilities_intro.png" alt="WSK_SDK_iOS"/></a>
        </p>
    </li>
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            请开启Application Target的Capabilities-&gt;Background Modes -&gt; Remote notifications选项：<br/><a href="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/capabilities_intro2.png" target="_blank" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none;"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/capabilities_intro2.png" alt="WSK_SDK_iOS"/></a>
        </p>
    </li>
    <li>
        <p style="box-sizing: border-box; margin-top: 16px; margin-bottom: 16px;">
            注册APNs推送
        </p>
    </li>
</ul>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {    
		......		
		//传入正确的App名称
	   [[WSKSDK sharedSDK] registerAppKey:appKey appName:App名称];	    
		//注册APNs推送
		if ([[UIDevice currentDevice].systemVersion floatValue] &gt;= 10.0) {
			 [UNUserNotificationCenter currentNotificationCenter].delegate = self;
		    [[UNUserNotificationCenter currentNotificationCenter] requestAuthorizationWithOptions:(UNAuthorizationOptionBadge | UNAuthorizationOptionSound | UNAuthorizationOptionAlert) completionHandler:^(BOOL granted, NSError * _Nullable error) {		        if (!error) {		            NSLog(@&quot;request authorization succeeded!&quot;);
		        }
		    }];
		    [[UIApplication sharedApplication] registerForRemoteNotifications];
		} else {		    //小于 iOS 10.0
		    UIUserNotificationSettings *settings = [UIUserNotificationSettings settingsForTypes:UIUserNotificationTypeAlert | UIUserNotificationTypeBadge | UIUserNotificationTypeSound categories:nil];
		    [application registerUserNotificationSettings:settings];
		    [[UIApplication sharedApplication] registerForRemoteNotifications];
		}
		
		......		
	    return YES;
	}</pre>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p>
            把 APNs Token 传给 SDK
        </p>
    </li>
</ul>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	- (void)application:(UIApplication *)app didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
		......
		
	    [[WSKSDK sharedSDK] updateApnsToken:deviceToken];
	    
	    ......
	}</pre>
<ul style="box-sizing: border-box; padding-left: 2em; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;" class=" list-paddingleft-2">
    <li>
        <p>
            接收APNs推送消息
        </p>
    </li>
</ul>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">// iOS8、iOS9 接收APNs推送的方法- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void(^)(UIBackgroundFetchResult))completionHandler {    NSLog(@&quot;收到APNs通知消息：%@&quot;, userInfo);    //Required
    completionHandler(UIBackgroundFetchResultNewData);
}// iOS10以及之后的版本接收APNs推送的方法// 前台收到推送- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler {    NSLog(@&quot;收到APNs通知消息：%@&quot;, notification.request.content.userInfo);    if([notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {        //远程通知
    } else {        //判断为本地通知
    }    completionHandler(UNNotificationPresentationOptionAlert | UNNotificationPresentationOptionSound | UNNotificationPresentationOptionBadge);
}// 点击通知栏触发的推送- (void)userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)())completionHandler {    NSLog(@&quot;收到APNs通知消息：%@&quot;, response.notification.request.content.userInfo);    if([response.notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {        //远程通知
    } else {        //判断为本地通知
    }    completionHandler();
}</pre>
<h3 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; font-size: 1.25em; line-height: 1.25; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#注销" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>注销
</h3>
<pre style="box-sizing: border-box; font-family: SFMono-Regular, Consolas, &quot;Liberation Mono&quot;, Menlo, Courier, monospace; font-size: 13.6px; margin-top: 0px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; word-wrap: normal; padding: 16px; overflow: auto; background-color: rgb(246, 248, 250); border-radius: 3px; word-break: normal;">	[[WSKSDK sharedSDK] logout:^{        NSLog(@&quot;注销成功！&quot;);
    }];</pre>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    应用层退出自己的账号时需要调用 SDK 的注销操作，该操作会通知服务器进行 APNs 推送信息的解绑操作，避免用户已退出但推送依然发送到当前设备的情况发生。
</p>
<h2 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid rgb(234, 236, 239); color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#常见问题" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>常见问题
</h2>
<p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 16px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    如果集成过程中遇到任何问题，可查看&nbsp;<a href="#/view/manual/article?site=1&amp;manual=2&amp;articleId=38#top-anchor" class="link">FAQ</a>
</p>
<h2 style="box-sizing: border-box; margin-top: 24px; margin-bottom: 16px; line-height: 1.25; padding-bottom: 0.3em; border-bottom: 1px solid rgb(234, 236, 239); color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal;">
    <a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK#补充说明" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none; float: left; padding-right: 4px; margin-left: -20px; line-height: 1;"></a>补充说明
</h2>
<p style="box-sizing: border-box; margin-top: 0px; color: rgb(36, 41, 46); font-family: -apple-system, system-ui, system-ui, &quot;Segoe UI&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; white-space: normal; margin-bottom: 0px !important;">
    如果您看完此文档后，还有任何集成方面的疑问，可以参考下 iOS SDK Demo 源码:<a href="https://github.com/visionetwsk/WSK_iOS_SDK_Demo.git" style="box-sizing: border-box; color: rgb(3, 102, 214); text-decoration: none;">https://github.com/visionetwsk/WSK_iOS_SDK_Demo.git</a>。<br/>源码充分的展示了 iOS SDK 的能力，并且为集成 iOS SDK 提供了样例代码。
</p>
<p>
    <br/>
</p>`;











articleMock[36] = `<h2 style="-webkit-print-color-adjust:exact;margin:0 0 10px;padding:0;-webkit-font-smoothing:antialiased;cursor:text;position:relative;font-size:24px;border-bottom:1px solid #ccc;font-family:Helvetica,arial,sans-serif;white-space:normal">创建应用程序ID</h2><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>登陆&nbsp;<a href="https://developer.apple.com/devcenter/ios/index.action" style="-webkit-print-color-adjust:exact;color:#4183c4;margin-top:0">iOS Dev Center</a>&nbsp;选择进入iOS Provisioning Portal。<br></p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/login.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>在 iOS Provisioning Portal中，点击App IDs进入App ID列表。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/appid.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>创建 App ID，如果 ID 已经存在可以直接跳过此步骤</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/appid2.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>为 App 开启 Push Notification 功能。如果是已经创建的 App ID 也可以通过设置开启 Push Notification 功能。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/appservice.png" alt="WSK_SDK_iOS"></p><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal">根据实际情况完善 App ID 信息并提交,注意此处需要指定具体的 Bundle ID 不要使用通配符。</p><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/appid3.png" alt="WSK_SDK_iOS"></p><h2 style="-webkit-print-color-adjust:exact;margin:20px 0 10px;padding:0;-webkit-font-smoothing:antialiased;cursor:text;position:relative;font-size:24px;border-bottom:1px solid #ccc;font-family:Helvetica,arial,sans-serif;white-space:normal">配置和下载证书</h2><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>如果你之前没有创建过 Push 证书或者是要重新创建一个新的，请在证书列表下面新建。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/cer0.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>新建证书需要注意选择证书种类（开发证书用于开发和调试使用，生产证书用于 App Store 发布）</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/cer1.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>点击 Continue 后选择证书对应的应用ID，然后继续会出现“About Creating a Certificate Signing Request (CSR)”。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/cer2.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>根据它的说明创建打开KeychainAccess 创建 Certificate Signing Request。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/Screenshot_13-4-1_5_22.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>填写“User Email Address”和“Common Name” 后选择 Saved to disk 进行保存 。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/Snip20140122_7.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>继续返回Apple developer 网站点击 Continue ，上传刚刚生成的 .certSigningRequest 文件生成 APNs Push Certificate。</p></li><li><p>下载并双击打开证书，证书打开时会启动“钥匙串访问”工具。</p></li><li><p>在“钥匙串访问”中你的证书会显示在“我的证书”中，注意选择“My Certificates” 和&quot;login&quot;</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/keychain_cert.png" alt="WSK_SDK_iOS"></p><h2 style="-webkit-print-color-adjust:exact;margin:20px 0 10px;padding:0;-webkit-font-smoothing:antialiased;cursor:text;position:relative;font-size:24px;border-bottom:1px solid #ccc;font-family:Helvetica,arial,sans-serif;white-space:normal">导出 .p12 证书文件</h2><blockquote style="-webkit-print-color-adjust:exact;margin:15px 0;border-left:4px solid #ddd;padding:0 15px;color:#777;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:0">注意要选“login”和“My Certificates” 导出证书时要选中证书文件，不要展开private key。</p></blockquote><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/export_p12.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>将文件保存为Personal Information Exchange (.p12)格式。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/export_filename.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p>如果导出时设置了密码，则上传证书时需要填写密码。</p></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/pwd.png" alt="WSK_SDK_iOS"></p><h2 style="-webkit-print-color-adjust:exact;margin:20px 0 10px;padding:0;-webkit-font-smoothing:antialiased;cursor:text;position:relative;font-size:24px;border-bottom:1px solid #ccc;font-family:Helvetica,arial,sans-serif;white-space:normal">上传证书</h2><p style="-webkit-print-color-adjust:exact;margin-top:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal;margin-bottom:0!important">在 微上客 Portal 上，针对某应用程序，上传上面步骤得到 .p12 证书文件。这是 iOS SDK 能够接收到苹果推送消息的必要步骤。<br>有关在微上客 Portal 上如何配置应用和上传推送证书，请参见&nbsp;<a href="#/view/manual/article?site=1&manual=2&articleId=37#top-anchor" class="link">新建App和上传推送证书</a></p><p><br></p>`;






articleMock[37] = `<p style="-webkit-print-color-adjust:exact;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal;margin-top:0!important">在 微上客 Portal 上，针对某应用程序，上传应用 .p12 推送证书文件。这是 iOS SDK 能够接收到苹果推送消息的必要步骤。</p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">登录微上客 Portal<br><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk0.png" alt="WSK_SDK_iOS"></p></li><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">如果还没有添加手机端渠道，需要添加该类型渠道,在左边菜单选择 配置 -&gt; 渠道管理 -&gt; 添加消息渠道 进入添加渠道页面</p><blockquote style="-webkit-print-color-adjust:exact;margin:15px 0;border-left:4px solid #ddd;padding:0 15px;color:#777"><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:0">如果已经添加手机渠道，则忽略创建渠道的步骤，直接进入添加App的操作</p></blockquote></li></ul><p style="-webkit-print-color-adjust:exact;margin-top:15px;margin-bottom:15px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal"><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk1.png" alt="WSK_SDK_iOS"></p><ul style="-webkit-print-color-adjust:exact;margin-top:15px;padding-left:30px;font-family:Helvetica,arial,sans-serif;font-size:14px;white-space:normal" class="list-paddingleft-2"><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">选择手机渠道<br><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk2.png" alt="WSK_SDK_iOS"></p></li><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">填写渠道名称，以及其他配置信息，完成添加手机渠道操作<br><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk3.png" alt="WSK_SDK_iOS"></p></li><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">添加一个新APP, 在左边菜单选择 配置 -&gt; App Sdk设置 -&gt; 选择刚才创建的手机渠道 -&gt; 添加一个新APP，进入APP添加和证书上传页面<br><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk4.png" alt="WSK_SDK_iOS"></p></li><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">选择iOS 平台，填写APP名称、Bundle ID，上传应用的P12推送证书。 推送环境如果选择生产环境，则推送时会选择APNs正式证书，反之为开发证书&nbsp;<img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk5.png" alt="WSK_SDK_iOS"></p></li><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">如果证书制作过程中有设置密码，则需要填写证书密码<br><img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk6.png" alt="WSK_SDK_iOS"></p></li><li><p style="-webkit-print-color-adjust:exact;margin-top:0;margin-bottom:15px">如下图所示，集成iOS 微上客 SDK 所需的AppKey以及AppName&nbsp;<img src="https://raw.githubusercontent.com/visionetwsk/Resource/master/image/wsk7.png" alt="WSK_SDK_iOS"></p></li></ul><p><br></p>`;














articleMock[38] = `<h4 style="box-sizing:border-box;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,system-ui,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal;background-color:#fff;margin-top:0!important">1、无法用 CocoaPods 下载到最新的 SDK，有可能是使用了淘宝源，尝试使用默认源。</h4><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,system-ui,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal;background-color:#fff"><a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98/_edit#2%E5%9C%A8%E4%BD%BF%E7%94%A8cocoapods%E9%9B%86%E6%88%90%E5%BE%AE%E4%B8%8A%E5%AE%A2sdk%E6%97%B6podfile%E4%B8%AD%E5%BF%85%E9%A1%BB%E5%8A%A0%E5%85%A5-use_frameworks-%E5%9B%A0%E4%B8%BA%E5%86%85%E9%83%A8%E6%9C%89%E4%BE%9D%E8%B5%96swift%E7%9A%84%E5%BA%93" style="box-sizing:border-box;background-color:transparent;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>2、在使用CocoaPods集成微上客SDK时，Podfile中必须加入 use_frameworks! ，因为内部有依赖Swift的库</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:16px;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;color:#24292e">platform :ios, &#39;8.0&#39;      
use_frameworks!		#必须加入这一句，因为有依赖swift库

target &#39;YourApp&#39; do
    pod &#39;WSK_iOS_SDK&#39;, &#39;~&gt; 1.0&#39; 
end</pre><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,system-ui,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal;background-color:#fff"><a class="anchor" href="https://github.com/visionetwsk/WSK_iOS_SDK/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98/_edit#3%E4%BD%BF%E7%94%A8-cocoapods-%E9%9B%86%E6%88%90-sdk-%E5%90%8E%E5%87%BA%E7%8E%B0%E6%89%BE%E4%B8%8D%E5%88%B0%E7%AC%AC%E4%B8%89%E5%BA%93%E5%A4%B4%E6%96%87%E4%BB%B6%E6%88%96%E8%80%85%E6%A1%86%E6%9E%B6%E6%B2%A1%E6%9C%89%E6%89%BE%E5%88%B0" style="box-sizing:border-box;background-color:transparent;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>3、使用 CocoaPods 集成 SDK 后,出现找不到第三库头文件或者框架没有找到。</h4><p style="box-sizing:border-box;margin-top:0;color:#24292e;font-family:-apple-system,system-ui,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal;background-color:#fff;margin-bottom:0!important">在 Build Settings -&gt; Framework Search Paths 中添加 $(inherited)</p>`;






articleMock[39] = `<h2 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;padding-bottom:.3em;border-bottom:1px solid #eaecef;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#简介" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>简介</h2><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">微尚客 Android SDK 是一个 Android 端客服系统访客解决方案，既包含了客服聊天逻辑管理，也提供了聊天界面，开发者可方便的将客服功能集成到自己的 APP 中。</p></blockquote><h2 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;padding-bottom:.3em;border-bottom:1px solid #eaecef;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#快速集成" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>快速集成</h2><h3 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;font-size:1.25em;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#1添加-sdk-到项目中" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>1.添加 SDK 到项目中。</h3><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#android-studio" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>Android Studio:</h4><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">在工程 build.gradle 文件中添加依赖：</p></blockquote><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">compile &#39;com.visionet:wskcss:1.0.2&#39;</pre><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">请将1.0.2替换为此徽章后面的版本号<a href="https://bintray.com/visionetwsk/wskcss/wsk_sdk/_latestVersion" style="box-sizing:border-box;color:#0366d6;text-decoration:none"><img src="https://camo.githubusercontent.com/b5685152b687b1273ae671f44d56f0d072ec9c44/68747470733a2f2f6170692e62696e747261792e636f6d2f7061636b616765732f766973696f6e657477736b2f77736b6373732f77736b5f73646b2f696d616765732f646f776e6c6f61642e737667"></a></p></blockquote><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#eclipse" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>Eclipse:</h4><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">先下载 WSK_Android_SDK_forEclipse，然后解压缩，将得到的 WskSDK 文件夹作为库工程模块导入到你的工程中，并添加模块依赖。然后将 AndroidManifest 文件中的内容拷贝到你的主工程的 manifest 文件中，将 assets 文件夹的内容拷贝你的主工程的 assets 目录中。</p></blockquote><h3 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;font-size:1.25em;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#2wskcsinit" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>2.WskCs.init();</h3><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">微尚客SDK初始化</p></blockquote><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">根据需求可选(三选一)：</p></blockquote><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#a在你的-application-类的-oncreate-函数中调用" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>a.在你的 Application 类的 onCreate 函数中调用：</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">  WskCs.init(context,appKey);</pre><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#b在你的业务系统登录后调用" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>b.在你的业务系统登录后调用：</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">  WskCs.init(context,userId,nickName,appKey);</pre><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#c在你的业务系统登录后调用" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>c.在你的业务系统登录后调用：</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">  UserInfo userInfo = new UserInfo(userId);  WskCS.init( context,appkey,userInfo );
  WskCs.init(context,appKey,userInfo);</pre><h5 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;font-size:.875em;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#可配置项" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>可配置项：</h5><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">public class UserInfo {   /**    * 用户昵称对应nickName    */
    private String customerName;    /**     * 性别(男：1；女：2)     */
    private int gender;    /**     * 手机号码     */
    private String phoneNumber;    /**     * 固定电话     */
    private String telephone;    /**     * 邮箱     */
    private String email;    /**     * 地址     */
    private String address;    /**     * 职位     */
    private String title;    /**     * 单位     */
    private String department;    /**     * 头像     */
    private String headimgurl;    /**     * 生日(yyyy-MM-dd)     */
    private String birthday;    /**     * 备注     */
    private String remark;
    
  }</pre><ul style="box-sizing:border-box;padding-left:2em;margin-bottom:16px;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal" class="list-paddingleft-2"><li><p>userId为你的业务系统中的的唯一标示，可以用id，账号等，用来保证不同手机客户端的与客服交流的数据同步</p></li><li><p>nickName为你的业务平台系统中的用户名，用来在客服平台展示访客的名称</p></li><li><p>appKey用来区分微尚客集成客户端，在微尚客平台的&nbsp;<span style="box-sizing:border-box;font-weight:600">App SDK设置</span>&nbsp;中可以找到</p></li><li><p>userInfo用户信息</p></li></ul><h3 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;font-size:1.25em;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#4registerreceiver-wskcspushbr" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>4.registerReceiver WskCSPushBR</h3><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">继承接收微尚客客服消息推送的广播</p></blockquote><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">public class MyWskCSPushBR extends WskCSPushBR{  /**   * 接收到消息   * @param push   */
  @Override
  public void onReceiverPush(Context context,ReceivePush push) {    //此处可以用来弹出通知Notification，显示未读消息数量等操作
  }  /**   * 收到离线消息集合   * param pushs   */
  @Override
  public void onReceiverOffLinePushs(Context context,List&lt;ReceivePush&gt; pushs) {    //此处可以用来弹出通知Notification，显示未读消息数量等操作
  }
}</pre><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#a可以通过代码注册" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>a.可以通过代码注册</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">IntentFilter filter = new IntentFilter( WskCSPushBR.ACTION_PUSH );
filter.setPriority( 990 );//此处小于1000,当处于联系客服界面时候将不会收到广播registerReceiver(wskCSPushBR,filter);</pre><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#bandroidmanifest进行注册" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>b.AndroidManifest进行注册</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">&lt;receiver android:name=&quot;.MyWskCSPushBR&quot; &gt;
  &lt;intent-filter android:priority=&quot;990&quot;&gt;&lt;!--此处小于1000,当处于联系客服界面时候将不会收到广播--&gt;
    &lt;action android:name=&quot;com.visionet.wskcss.ACTION_MESSAGE_PUSH&quot;&gt;&lt;/action&gt;
  &lt;/intent-filter&gt;
&lt;/receiver&gt;</pre><h3 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;font-size:1.25em;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#4-wskcstowskcs" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>4. WskCS.toWSKCS();</h3><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">跳转至客服界面(二选一)：</p></blockquote><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">    WskCS.toWSKCS( context);</pre><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">    /**     * 自动发送一个链接     * @param link 链接地址（跳转的url）     * @param linkDesc 链接描述（展示的信息）     */
    WskCS.toWSKCS( context,link,linkDesc);</pre><h3 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;font-size:1.25em;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#5-wskcsstopreceiverpushservice" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>5. WskCS.stopReceiverPushService();</h3><blockquote style="box-sizing:border-box;margin:0 0 16px;padding:0 1em;color:#6a737d;border-left:.25em solid #dfe2e5;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><p style="box-sizing:border-box;margin-top:0;margin-bottom:0">停止接收客服消息的推送服务，注意当进入联系客服界面将服务将自动开启</p></blockquote><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">    /**     * 停止接收推送服务，一般在业务系统退出登录后调用     * @param saveOffLinePush 停止后所有消息是否保存为离线消息，离线消息在重连后会发送     */
     public static void stopReceiverPushService(boolean saveOffLinePush){
        ...
    }</pre><h3 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;font-size:1.25em;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#扩展功能" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>扩展功能:</h3><ul style="box-sizing:border-box;padding-left:2em;margin-bottom:16px;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal" class="list-paddingleft-2"><li><p>微尚客SDK的UI配置，如不需要可以不调用</p></li></ul><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#在初始化后调用" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>在初始化后调用：</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">  WskCsConfig config = new WskCsConfig();  WskCs.configUi(config);</pre><h4 style="box-sizing:border-box;margin-top:24px;margin-bottom:16px;line-height:1.25;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal"><a class="anchor" href="https://github.com/visionetwsk/WSK_Android_SDK/blob/master/README.md#可配置项-1" style="box-sizing:border-box;color:#0366d6;text-decoration:none;float:left;padding-right:4px;margin-left:-20px;line-height:1"></a>可配置项：</h4><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">public class WskCsConfig {    /**     * 客户头像url优先     */
    private String customerPhotoUrl;    /**     * 客户头像资源id     */
    private int customerPhotoDraweableId;    /**     * 客户聊天气泡背景资源id     */
    private int customerChatBgDraweableId;    /**     * 客服聊天气泡背景资源id     */
    private int serviceChatBgDraweableId;    /**     * 客服聊天文字颜色color；     */
    private Integer serviceTextColor;    /**     * 客户聊天文字颜色color；     */
    private Integer customerTextColor;    /**     * 聊天窗口背景资源Id     */
    private int backgroundDraweableId;    /**     * 聊天窗口背景颜色     */
    private Integer backgroundColor ;    
    /**     * 展示时间颜色color；     */
    private Integer dateTimeTextColor;    /**     * 提示文字颜色     */
    private Integer promptTextColor;    /**     * 提示背景图片     */
    private int promptBgDrawableId;    /**     * 加载进度条颜色     */
    private Integer loadingColor;    /**     *发送进度条颜色     */
    private Integer sendingColor;    /**     * titlebar背景颜色     */
    private Integer titlebarBgColor;    /**     * 状态栏背景色     */
    private Integer statusbarColor;    /**     * 返回键图标资源id     */
    private int backIconDrweableId;    /**     * title右边text颜色     */
    private Integer titleRightColor;    /**     * titleColor     */
    private Integer titleColor;    /**     * titlebar下横线是否显示     */
    private boolean showTitleLine;
 }</pre><ul style="box-sizing:border-box;padding-left:2em;margin-bottom:16px;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;,&quot;Segoe UI Symbol&quot;white-space:normal" class="list-paddingleft-2"><li><p>监听url消息的点击事件，在 WskCS.toWSKCS()后调用;</p></li></ul><pre style="box-sizing:border-box;font-family:SFMono-Regular,Consolas,&quot;Liberation Mono&quot;,Menlo,Courier,monospace;font-size:13.6px;margin-top:0;margin-bottom:0;font-stretch:normal;line-height:1.45;word-wrap:normal;padding:16px;overflow:auto;background-color:#f6f8fa;border-radius:3px;word-break:normal">    WskCS.setUrlMsgClickListener( new WskCS.UrlMsgClickListener() {    /**    * 链接类型的消息点击    * @param url 连接消息的url    * @return 当符合条件返回正确处理返回true,不符合条件的返回false将通过webview加载.    */
    @Override
    public boolean handlerUrlClick(Context context,String url) {
      if(url!=null&amp;&amp;url.contains(?)){        ...
        return true;
      }
      return false; 
    } );</pre><p><br></p>`;

