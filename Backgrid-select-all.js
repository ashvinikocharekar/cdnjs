




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>backgrid-select-all/backgrid-select-all.js at master · twalker/backgrid-select-all · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="twalker/backgrid-select-all" name="twitter:title" /><meta content="backgrid-select-all - Select-all extension for Backgrid.js" name="twitter:description" /><meta content="https://2.gravatar.com/avatar/6021e07583610215f2d45d0c3c449f67?d=https%3A%2F%2Fidenticons.github.com%2Fdceb8c7369680b81d02c4f7a7302c00b.png&amp;r=x&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://2.gravatar.com/avatar/6021e07583610215f2d45d0c3c449f67?d=https%3A%2F%2Fidenticons.github.com%2Fdceb8c7369680b81d02c4f7a7302c00b.png&amp;r=x&amp;s=400" property="og:image" /><meta content="twalker/backgrid-select-all" property="og:title" /><meta content="https://github.com/twalker/backgrid-select-all" property="og:url" /><meta content="backgrid-select-all - Select-all extension for Backgrid.js" property="og:description" />

    <meta name="hostname" content="github-fe126-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (87d8860372) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CBC748D2:55B9:85B3202:52EF5B85" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="k11ireq1Z9mrG7ex9HbACz7rrybLXi/k4UBeUVX/zl8=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-24110eba31d0d5f1c0d31c305baf1f7e0557948d.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-09d4cddbd997c7aff84e5b1a25917774ca5c8fd7.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-02ee5d6f13ffacca6207d163a3c10aba4fb80b16.js" type="text/javascript"></script>
      <script async="async" defer="defer" src="https://github.global.ssl.fastly.net/assets/github-a53088f26c2015260e9096feaf8fe0b38dce3cf5.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="a2c8f483706c14f8c834c12d447f1c1f">

        <link data-pjax-transient rel='permalink' href='/twalker/backgrid-select-all/blob/c502a8251fea1c7ce6f026e738c79f1bbe48398e/backgrid-select-all.js'>

  <meta name="description" content="backgrid-select-all - Select-all extension for Backgrid.js" />

  <meta content="101895" name="octolytics-dimension-user_id" /><meta content="twalker" name="octolytics-dimension-user_login" /><meta content="12801107" name="octolytics-dimension-repository_id" /><meta content="twalker/backgrid-select-all" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="10888112" name="octolytics-dimension-repository_parent_id" /><meta content="wyuenho/backgrid-select-all" name="octolytics-dimension-repository_parent_nwo" /><meta content="10888112" name="octolytics-dimension-repository_network_root_id" /><meta content="wyuenho/backgrid-select-all" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/twalker/backgrid-select-all/commits/master.atom" rel="alternate" title="Recent Commits to backgrid-select-all:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public fork page-blob">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Ftwalker%2Fbackgrid-select-all%2Fblob%2Fmaster%2Fbackgrid-select-all.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="twalker/backgrid-select-all"
      data-branch="master"
      data-sha="c185a6f579ce1314c673da2a12558b2aaf68795e"
  >

    <input type="hidden" name="nwo" value="twalker/backgrid-select-all" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Ftwalker%2Fbackgrid-select-all"
    class="minibutton with-count js-toggler-target star-button tooltipped upwards"
    title="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/twalker/backgrid-select-all/stargazers">
      0
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Ftwalker%2Fbackgrid-select-all"
        class="minibutton with-count js-toggler-target fork-button tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/twalker/backgrid-select-all/network" class="social-count">
        8
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/twalker" class="url fn" itemprop="url" rel="author"><span itemprop="title">twalker</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/twalker/backgrid-select-all" class="js-current-repository js-repo-home-link">backgrid-select-all</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/wyuenho/backgrid-select-all">wyuenho/backgrid-select-all</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/twalker/backgrid-select-all" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /twalker/backgrid-select-all">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/twalker/backgrid-select-all/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /twalker/backgrid-select-all/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/twalker/backgrid-select-all/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /twalker/backgrid-select-all/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/twalker/backgrid-select-all/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /twalker/backgrid-select-all/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/twalker/backgrid-select-all/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /twalker/backgrid-select-all/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/twalker/backgrid-select-all.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/twalker/backgrid-select-all.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/twalker/backgrid-select-all" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/twalker/backgrid-select-all" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/twalker/backgrid-select-all/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:38321e8c6d2377e9771a042114687ebf -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/twalker/backgrid-select-all/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/twalker/backgrid-select-all/blob/master/backgrid-select-all.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/twalker/backgrid-select-all" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">backgrid-select-all</span></a></span></span><span class="separator"> / </span><strong class="final-path">backgrid-select-all.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="backgrid-select-all.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="tim walker" class="main-avatar" height="24" src="https://0.gravatar.com/avatar/6021e07583610215f2d45d0c3c449f67?d=https%3A%2F%2Fidenticons.github.com%2Fdceb8c7369680b81d02c4f7a7302c00b.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/twalker" rel="author">twalker</a></span>
    <time class="js-relative-date" datetime="2013-09-16T20:23:21-07:00" title="2013-09-16 20:23:21">September 16, 2013</time>
    <div class="commit-title">
        <a href="/twalker/backgrid-select-all/commit/c502a8251fea1c7ce6f026e738c79f1bbe48398e" class="message" data-pjax="true" title="remove global from select-all unit test. ref #3">remove global from select-all unit test. ref</a> <a href="https://github.com/wyuenho/backgrid-select-all/issues/3" class="issue-link" title="`getSelectedModels` sometimes includes undefined values">#3</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>3</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="wyuenho" href="/twalker/backgrid-select-all/commits/c502a8251fea1c7ce6f026e738c79f1bbe48398e/backgrid-select-all.js?author=wyuenho"><img alt="Jimmy Yuen Ho Wong" height="20" src="https://0.gravatar.com/avatar/8c68a839282f699145cb8bc314287555?d=https%3A%2F%2Fidenticons.github.com%2F9128f527533fa934adcd07f95cbadb3e.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="twalker" href="/twalker/backgrid-select-all/commits/c502a8251fea1c7ce6f026e738c79f1bbe48398e/backgrid-select-all.js?author=twalker"><img alt="tim walker" height="20" src="https://0.gravatar.com/avatar/6021e07583610215f2d45d0c3c449f67?d=https%3A%2F%2Fidenticons.github.com%2Fdceb8c7369680b81d02c4f7a7302c00b.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="mallim" href="/twalker/backgrid-select-all/commits/c502a8251fea1c7ce6f026e738c79f1bbe48398e/backgrid-select-all.js?author=mallim"><img alt="Ian Lim" height="20" src="https://0.gravatar.com/avatar/2e3aee53cff7e3344644aeb5a40802d1?d=https%3A%2F%2Fidenticons.github.com%2F28938bf61ea40e088f46a72a1917465f.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jimmy Yuen Ho Wong" height="24" src="https://0.gravatar.com/avatar/8c68a839282f699145cb8bc314287555?d=https%3A%2F%2Fidenticons.github.com%2F9128f527533fa934adcd07f95cbadb3e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/wyuenho">wyuenho</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="tim walker" height="24" src="https://0.gravatar.com/avatar/6021e07583610215f2d45d0c3c449f67?d=https%3A%2F%2Fidenticons.github.com%2Fdceb8c7369680b81d02c4f7a7302c00b.png&amp;r=x&amp;s=140" width="24" />
            <a href="/twalker">twalker</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ian Lim" height="24" src="https://0.gravatar.com/avatar/2e3aee53cff7e3344644aeb5a40802d1?d=https%3A%2F%2Fidenticons.github.com%2F28938bf61ea40e088f46a72a1917465f.png&amp;r=x&amp;s=140" width="24" />
            <a href="/mallim">mallim</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>247 lines (204 sloc)</span>
        <span>7.613 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped leftwards" href="#"
                 title="You must be signed in to make or propose changes">Edit</a>
          <a href="/twalker/backgrid-select-all/raw/master/backgrid-select-all.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/twalker/backgrid-select-all/blame/master/backgrid-select-all.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/twalker/backgrid-select-all/commits/master/backgrid-select-all.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped leftwards" href="#"
             title="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">  backgrid-select-all</span></div><div class='line' id='LC3'><span class="cm">  http://github.com/wyuenho/backgrid</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="cm">  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors</span></div><div class='line' id='LC6'><span class="cm">  Licensed under the MIT @license.</span></div><div class='line' id='LC7'><span class="cm">*/</span></div><div class='line' id='LC8'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">factory</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="c1">// CommonJS</span></div><div class='line' id='LC11'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">exports</span> <span class="o">==</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">factory</span><span class="p">(</span><span class="nx">require</span><span class="p">(</span><span class="s2">&quot;backbone&quot;</span><span class="p">),</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;backgrid&quot;</span><span class="p">));</span></div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="c1">// Browser</span></div><div class='line' id='LC15'>&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">Backbone</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">Backgrid</span> <span class="o">!==</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">factory</span><span class="p">(</span><span class="nx">Backbone</span><span class="p">,</span> <span class="nx">Backgrid</span><span class="p">);</span></div><div class='line' id='LC17'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="p">}(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">Backbone</span><span class="p">,</span> <span class="nx">Backgrid</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'>&nbsp;&nbsp;<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">$</span><span class="p">;</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC26'><span class="cm">     Renders a checkbox for row selection.</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'><span class="cm">     @class Backgrid.Extension.SelectRowCell</span></div><div class='line' id='LC29'><span class="cm">     @extends Backbone.View</span></div><div class='line' id='LC30'><span class="cm">  */</span></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">SelectRowCell</span> <span class="o">=</span> <span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Extension</span><span class="p">.</span><span class="nx">SelectRowCell</span> <span class="o">=</span> <span class="nx">Backbone</span><span class="p">.</span><span class="nx">View</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/** @property */</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">className</span><span class="o">:</span> <span class="s2">&quot;select-row-cell&quot;</span><span class="p">,</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/** @property */</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s2">&quot;td&quot;</span><span class="p">,</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/** @property */</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">events</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;keydown :checkbox&quot;</span><span class="o">:</span> <span class="s2">&quot;onKeydown&quot;</span><span class="p">,</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;change :checkbox&quot;</span><span class="o">:</span> <span class="s2">&quot;onChange&quot;</span><span class="p">,</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;click :checkbox&quot;</span><span class="o">:</span> <span class="s2">&quot;enterEditMode&quot;</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC47'><span class="cm">       Initializer. If the underlying model triggers a `select` event, this cell</span></div><div class='line' id='LC48'><span class="cm">       will change its checked value according to the event&#39;s `selected` value.</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'><span class="cm">       @param {Object} options</span></div><div class='line' id='LC51'><span class="cm">       @param {Backgrid.Column} options.column</span></div><div class='line' id='LC52'><span class="cm">       @param {Backbone.Model} options.model</span></div><div class='line' id='LC53'><span class="cm">    */</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">column</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">column</span><span class="p">;</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">column</span> <span class="k">instanceof</span> <span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Column</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">column</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Column</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">column</span><span class="p">);</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">listenTo</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span> <span class="s2">&quot;backgrid:select&quot;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">selected</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;:checkbox&quot;</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">,</span> <span class="nx">selected</span><span class="p">).</span><span class="nx">change</span><span class="p">();</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">column</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">column</span><span class="p">,</span> <span class="nx">$el</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">;</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">listenTo</span><span class="p">(</span><span class="nx">column</span><span class="p">,</span> <span class="s2">&quot;change:renderable&quot;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">column</span><span class="p">,</span> <span class="nx">renderable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$el</span><span class="p">.</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;renderable&quot;</span><span class="p">,</span> <span class="nx">renderable</span><span class="p">);</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">column</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s2">&quot;renderable&quot;</span><span class="p">))</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;renderable&quot;</span><span class="p">);</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC74'><span class="cm">       Focuses the checkbox.</span></div><div class='line' id='LC75'><span class="cm">    */</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enterEditMode</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;:checkbox&quot;</span><span class="p">).</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC81'><span class="cm">       Unfocuses the checkbox.</span></div><div class='line' id='LC82'><span class="cm">    */</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exitEditMode</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;:checkbox&quot;</span><span class="p">).</span><span class="nx">blur</span><span class="p">();</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC88'><span class="cm">       Process keyboard navigation.</span></div><div class='line' id='LC89'><span class="cm">    */</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onKeydown</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">command</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Command</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">command</span><span class="p">.</span><span class="nx">passThru</span><span class="p">())</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span> <span class="c1">// skip ahead to `change`</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">command</span><span class="p">.</span><span class="nx">cancel</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;:checkbox&quot;</span><span class="p">).</span><span class="nx">blur</span><span class="p">();</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">command</span><span class="p">.</span><span class="nx">save</span><span class="p">()</span> <span class="o">||</span> <span class="nx">command</span><span class="p">.</span><span class="nx">moveLeft</span><span class="p">()</span> <span class="o">||</span> <span class="nx">command</span><span class="p">.</span><span class="nx">moveRight</span><span class="p">()</span> <span class="o">||</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">command</span><span class="p">.</span><span class="nx">moveUp</span><span class="p">()</span> <span class="o">||</span> <span class="nx">command</span><span class="p">.</span><span class="nx">moveDown</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;backgrid:edited&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">column</span><span class="p">,</span> <span class="nx">command</span><span class="p">);</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC106'><span class="cm">       When the checkbox&#39;s value changes, this method will trigger a Backbone</span></div><div class='line' id='LC107'><span class="cm">       `backgrid:selected` event with a reference of the model and the</span></div><div class='line' id='LC108'><span class="cm">       checkbox&#39;s `checked` value.</span></div><div class='line' id='LC109'><span class="cm">    */</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onChange</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">checked</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s1">&#39;checked&#39;</span><span class="p">);</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s1">&#39;selected&#39;</span><span class="p">,</span> <span class="nx">checked</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;backgrid:selected&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">model</span><span class="p">,</span> <span class="nx">checked</span><span class="p">);</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC117'><span class="cm">       Renders a checkbox in a table cell.</span></div><div class='line' id='LC118'><span class="cm">    */</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">render</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">empty</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;input tabindex=&quot;-1&quot; type=&quot;checkbox&quot; /&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">delegateEvents</span><span class="p">();</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC128'><span class="cm">     Renders a checkbox to select all rows on the current page.</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'><span class="cm">     @class Backgrid.Extension.SelectAllHeaderCell</span></div><div class='line' id='LC131'><span class="cm">     @extends Backgrid.Extension.SelectRowCell</span></div><div class='line' id='LC132'><span class="cm">  */</span></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">SelectAllHeaderCell</span> <span class="o">=</span> <span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Extension</span><span class="p">.</span><span class="nx">SelectAllHeaderCell</span> <span class="o">=</span> <span class="nx">SelectRowCell</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/** @property */</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">className</span><span class="o">:</span> <span class="s2">&quot;select-all-header-cell&quot;</span><span class="p">,</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/** @property */</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tagName</span><span class="o">:</span> <span class="s2">&quot;th&quot;</span><span class="p">,</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC142'><span class="cm">       Initializer. When this cell&#39;s checkbox is checked, a Backbone</span></div><div class='line' id='LC143'><span class="cm">       `backgrid:select` event will be triggered for each model for the current</span></div><div class='line' id='LC144'><span class="cm">       page in the underlying collection. If a `SelectRowCell` instance exists</span></div><div class='line' id='LC145'><span class="cm">       for the rows representing the models, they will check themselves. If any</span></div><div class='line' id='LC146'><span class="cm">       of the SelectRowCell instances trigger a Backbone `backgrid:selected`</span></div><div class='line' id='LC147'><span class="cm">       event with a `false` value, this cell will uncheck its checkbox. In the</span></div><div class='line' id='LC148'><span class="cm">       event of a Backbone `backgrid:refresh` event, which is triggered when the</span></div><div class='line' id='LC149'><span class="cm">       body refreshes its rows, which can happen under a number of conditions</span></div><div class='line' id='LC150'><span class="cm">       such as paging or the columns were reset, this cell will still remember</span></div><div class='line' id='LC151'><span class="cm">       the previously selected models and trigger a Backbone `backgrid:select`</span></div><div class='line' id='LC152'><span class="cm">       event on them such that the SelectRowCells can recheck themselves upon</span></div><div class='line' id='LC153'><span class="cm">       refreshing.</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'><span class="cm">       @param {Object} options</span></div><div class='line' id='LC156'><span class="cm">       @param {Backgrid.Column} options.column</span></div><div class='line' id='LC157'><span class="cm">       @param {Backbone.Collection} options.collection</span></div><div class='line' id='LC158'><span class="cm">    */</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initialize</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">column</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">column</span><span class="p">;</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">column</span> <span class="k">instanceof</span> <span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Column</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">column</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Column</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">column</span><span class="p">);</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collection</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">selectedModels</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">selectedModels</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">listenTo</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="s2">&quot;backgrid:selected&quot;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">model</span><span class="p">,</span> <span class="nx">selected</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">selected</span><span class="p">)</span> <span class="nx">selectedModels</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">cid</span><span class="p">]</span> <span class="o">=</span> <span class="nx">model</span><span class="p">;</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">selectedModels</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">cid</span><span class="p">];</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;:checkbox&quot;</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">listenTo</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="s2">&quot;remove&quot;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">selectedModels</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">cid</span><span class="p">];</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">listenTo</span><span class="p">(</span><span class="nx">collection</span><span class="p">,</span> <span class="s2">&quot;backgrid:refresh&quot;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;:checkbox&quot;</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">collection</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">model</span> <span class="o">=</span> <span class="nx">collection</span><span class="p">.</span><span class="nx">at</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">selectedModels</span><span class="p">[</span><span class="nx">model</span><span class="p">.</span><span class="nx">id</span> <span class="o">||</span> <span class="nx">model</span><span class="p">.</span><span class="nx">cid</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;backgrid:select&#39;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">column</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">column</span><span class="p">,</span> <span class="nx">$el</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$el</span><span class="p">;</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">listenTo</span><span class="p">(</span><span class="nx">column</span><span class="p">,</span> <span class="s2">&quot;change:renderable&quot;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">column</span><span class="p">,</span> <span class="nx">renderable</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$el</span><span class="p">.</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;renderable&quot;</span><span class="p">,</span> <span class="nx">renderable</span><span class="p">);</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">column</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s2">&quot;renderable&quot;</span><span class="p">))</span> <span class="nx">$el</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;renderable&quot;</span><span class="p">);</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC199'><span class="cm">       Progagates the checked value of this checkbox to all the models of the</span></div><div class='line' id='LC200'><span class="cm">       underlying collection by triggering a Backbone `backgrid:select` event on</span></div><div class='line' id='LC201'><span class="cm">       the models themselves, passing each model and the current `checked` value</span></div><div class='line' id='LC202'><span class="cm">       of the checkbox in each event.</span></div><div class='line' id='LC203'><span class="cm">    */</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">onChange</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">checked</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">prop</span><span class="p">(</span><span class="s2">&quot;checked&quot;</span><span class="p">);</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collection</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span><span class="p">;</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collection</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">model</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">model</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;backgrid:select&quot;</span><span class="p">,</span> <span class="nx">model</span><span class="p">,</span> <span class="nx">checked</span><span class="p">);</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC216'><span class="cm">     Convenient method to retrieve a list of selected models. This method only</span></div><div class='line' id='LC217'><span class="cm">     exists when the `SelectAll` extension has been included. Selected models</span></div><div class='line' id='LC218'><span class="cm">     are retained across pagination.</span></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'><span class="cm">     @member Backgrid.Grid</span></div><div class='line' id='LC221'><span class="cm">     @return {Array.&lt;Backbone.Model&gt;}</span></div><div class='line' id='LC222'><span class="cm">  */</span></div><div class='line' id='LC223'>&nbsp;&nbsp;<span class="nx">Backgrid</span><span class="p">.</span><span class="nx">Grid</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getSelectedModels</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">selectAllHeaderCell</span><span class="p">;</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">headerCells</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">header</span><span class="p">.</span><span class="nx">row</span><span class="p">.</span><span class="nx">cells</span><span class="p">;</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">headerCells</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">headerCell</span> <span class="o">=</span> <span class="nx">headerCells</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">headerCell</span> <span class="k">instanceof</span> <span class="nx">SelectAllHeaderCell</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">selectAllHeaderCell</span> <span class="o">=</span> <span class="nx">headerCell</span><span class="p">;</span></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">collection</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">collection</span><span class="p">;</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="s1">&#39;fullCollection&#39;</span> <span class="k">in</span> <span class="nx">collection</span><span class="p">)</span> <span class="nx">collection</span> <span class="o">=</span> <span class="nx">collection</span><span class="p">.</span><span class="nx">fullCollection</span><span class="p">;</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">selectAllHeaderCell</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">modelId</span> <span class="k">in</span> <span class="nx">selectAllHeaderCell</span><span class="p">.</span><span class="nx">selectedModels</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">collection</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">modelId</span><span class="p">));</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC244'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><span class="p">}));</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04740s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/twalker/backgrid-select-all/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

