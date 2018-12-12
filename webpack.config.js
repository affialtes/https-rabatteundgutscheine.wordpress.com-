
<!DOCTYPE html>
<html lang="en">
  <head>
	<meta charset="utf-8">
	<!--   <link rel="dns-prefetch" href="https://assets-cdn.github.com"> -->
	<link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
	<link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
	<link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
	<link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
	<link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
	<link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



	<meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
	<meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
	<meta name="selected-link" value="repo_issues">


	<meta name="octolytics-dimension-device" content="mobile" />
	<meta name="octolytics-dimension-user_id" content="16785467" /><meta name="octolytics-dimension-user_login" content="googleapis" /><meta name="octolytics-dimension-repository_id" content="8608480" /><meta name="octolytics-dimension-repository_nwo" content="googleapis/google-api-nodejs-client" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="8608480" /><meta name="octolytics-dimension-repository_network_root_nwo" content="googleapis/google-api-nodejs-client" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


	<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="B486:6986:63C8315:AA3A300:5BEC508B" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="44534247" /><meta name="octolytics-actor-login" content="shoppingandmore2017" /><meta name="octolytics-actor-hash" content="948e001abef82015cab147c637c2b3938aeddd7ef6fb9939cf359a0839a4eb3a" />
	<meta name="analytics-location-query-strip" content="true" data-pjax-transient="true" /><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/issues/show" data-pjax-transient="true" />



	<meta name="google-analytics" content="UA-3769691-2">

	<meta class="js-ga-set" name="userId" content="57e4592c4ecc74d50ee1881f64ad235a" %>

	<meta class="js-ga-set" name="dimension1" content="Logged In">

	<meta class="js-ga-set" name="dimension3" content="mobile">




	<title>Poor Typings for Schema$InstanceAggregatedList · Issue #1383 · googleapis/google-api-nodejs-client</title>

	<link crossorigin="anonymous" media="all" integrity="sha512-EFgogc52p9/QCRL0nZxOKFBPdljXOVIbScULSey295+vAGl3Vq9aZBCMYENgl9aLCq38K32Lc+cMokoeBu44/Q==" rel="stylesheet" href="https://assets-cdn.github.com/assets/mobile-ab499526ae3a85155b1900835f51dd15.css" />


	<meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

	<meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

	<link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
	<link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

	<meta name="theme-color" content="#1e2327">



	<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="page-responsive">



	<header class="Header f5 lh-default clearfix">
	  <div class="p-responsive flex-justify-between">
		<div class="d-flex flex-justify-between flex-items-center position-absolute right-0 left-0 px-3 mt-1">
		  <div class="d-flex mx-2"><!-- placeholder for hamburger --></div>
		  <div class="px-3 overflow-hidden">
			<div class="css-truncate css-truncate-target width-fit">
			  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
			  <strong>
				<a class="text-white" href="/googleapis">googleapis</a>
			  </strong> /
			  <strong>
				<a class="text-white" href="/googleapis/google-api-nodejs-client">google-api-nodejs-client</a>
			  </strong>
			</div>

		  </div>

		  <div class="d-flex">
			<a href="/googleapis/google-api-nodejs-client/issues/new" class="header-button header-context-button">
			  <svg height="22" class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
			</a>


			<a class="position-relative notification-indicator ml-3" href="/notifications"
			   aria-label="You have unread notifications"
			   data-ga-click="Mobile, tap, location:header; text:Notifications">
			  <span class="mail-status unread"></span>
			  <svg height="16" class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
			</a>
		  </div>
		</div>


		<details class="details-reset">
		  <summary class="mt-1 float-left position-relative user-select-none" data-ga-click="Mobile, tap, location:header; text:Hamburger">
			<svg height="24" class="octicon octicon-three-bars notification-indicator" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
		  </summary>
		  <div style="clear: both;">
			<div class="py-3">
			  <div class="header-search scoped-search site-scoped-search js-site-search position-relative "
				   role="search"
				   >
				<div class="position-relative">
				  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="8608480" data-scoped-search-url="/googleapis/google-api-nodejs-client/search" data-unscoped-search-url="/search" action="/googleapis/google-api-nodejs-client/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
			  <label class="form-control header-search-wrapper  js-chromeless-input-container">
				<a class="header-search-scope no-underline" href="/googleapis/google-api-nodejs-client/issues/1383">This repository</a>
				<input type="text"
					   class="form-control header-search-input  js-site-search-focus js-site-search-field is-clearable"
					   data-hotkey="s,/"
					   name="q"
					   value=""
					   placeholder="Search"
					   data-unscoped-placeholder="Search GitHub"
					   data-scoped-placeholder="Search"
					   autocapitalize="off"
					   aria-label="Search this repository"
					   >
				<input type="hidden" class="js-site-search-type-field" name="type" >
			  </label>
			  </form>  </div>
		  </div>

		  </div>
		<ul class="text-bold list-style-none p-0 m-0">
		  <li>
			<a href="/" data-ga-click="Mobile, tap, location:header; text:Dashboard" class="js-selected-navigation-item HeaderNavlink py-2 mt-3">
			  Dashboard
			</a>
		  </li>
		  <li>
			<a class="js-selected-navigation-item HeaderNavlink py-2" href="/pulls">
			  Pull requests
			</a>            </\u006c\u0069>
		<li>
		  <a class="js-selected-navigation-item HeaderNavlink py-2" href="/issues">
			Issues
		  </a>            </li>
		<li>
		  <a class="js-selected-navigation-item HeaderNavlink py-2" data-ga-click="Mobile, tap, location:header; text:Marketplace" href="/marketplace">
			Marketplace
		  </a>              </li>
		<li>
		  <a href="/explore" data-ga-click="Mobile, tap, location:header; text:Explore" class="js-selected-navigation-item HeaderNavlink py-2">
			Explore
		  </a>
		</li>
		<li>
		  <a href="/shoppingandmore2017" data-ga-click="Mobile, tap, location:header; text:User avatar" class="js-selected-navigation-item HeaderNavlink py-2">
			<img class="avatar" src="https://avatars3.githubusercontent.com/u/44534247?s=40&amp;v=4" width="20" height="20" alt="@shoppingandmore2017" />
			shoppingandmore2017
		  </a>
		</li>
		<li>
		  <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out" class="HeaderNavlink py-2" style="padding-left: 2px;">
			<svg style="margin-right: 2px;" class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.995h-1v3.997z"/></svg>
			Sign out
		  </a>
		</li>
		</ul>
	  </div>

	</details>
  </div>
</header>


<div class="flash flash-full js-notice flash-error">
  <div class="container">










	<h4>Your account has been flagged.</h4>
	Because of that, your profile is hidden from the public. If you believe this is a mistake, <a href="/contact">contact support</a> to have your account status reviewed.









  </div>
</div>








<div class="reponav-wrapper lh-default">
  <nav class="reponav js-reponav"
	   itemscope
	   itemtype="http://schema.org/BreadcrumbList">

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a class="js-selected-navigation-item reponav-item" itemprop="url" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /googleapis/google-api-nodejs-client" href="/googleapis/google-api-nodejs-client">
		<span itemprop="name">Code</span>
		<meta itemprop="position" content="1">
	  </a>    </span>

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a itemprop="url" class="js-selected-navigation-item selected reponav-item" aria-current="page" data-selected-links="repo_issues repo_labels repo_milestones /googleapis/google-api-nodejs-client/issues" href="/googleapis/google-api-nodejs-client/issues">
		<span itemprop="name">Issues</span>
		<span class="Counter">67</span>
		<meta itemprop="position" content="2">
	  </a>      </span>

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /googleapis/google-api-nodejs-client/pulls" href="/googleapis/google-api-nodejs-client/pulls">
		<span itemprop="name">Pull requests</span>
		<span class="Counter">2</span>
		<meta itemprop="position" content="3">
	  </a>    </span>

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links=" /googleapis/google-api-nodejs-client/projects" href="/googleapis/google-api-nodejs-client/projects">
		<span itemprop="name">Projects</span>
		<span class="Counter">0</span>
		<meta itemprop="position" content="4">
	  </a>      </span>


	<a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /googleapis/google-api-nodejs-client/pulse" href="/googleapis/google-api-nodejs-client/pulse">
	  Pulse
	</a>
  </nav>
</div>

<div id="js-flash-container">


</div>




<div class="js-comment">
  <div class="discussion-header">
	<div class="clearfix">
	  <a href="#bottom" class="float-right py-1 js-scroll">Jump to bottom</a>

	  <span class="State State--red float-left">
		<svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
		Closed
	  </span>
	</div>

	<h1 class="discussion-title">
	  Poor Typings for Schema$InstanceAggregatedList
	  <span class="text-gray text-normal">#1383</span>
	</h1>
	<div class="hide-when-editing">
	  <div class="d-flex flex-row discussion-block-title">
		<div class="flex-auto">
		  <img class="avatar" src="https://avatars0.githubusercontent.com/u/38667046?s=64&amp;v=4" width="32" height="32" alt="@david-cannady" />

		  <div class="discussion-block-meta">
			<strong><a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=38667046" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/david-cannady">david-cannady</a></strong>

			opened this issue
			<br>
			about 1 month ago
			<br>
		  </div>
		</div>

	  </div>
	</div>
  </div>

  <span class="labels discussion-labels">
	<svg class="octicon octicon-tag" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>
	<a href="/googleapis/google-api-nodejs-client/labels/TypeScript" class="IssueLabel d-inline-block"
	   style="background-color: #264199; color: #ffffff;">
	  TypeScript
	</a>
	<a href="/googleapis/google-api-nodejs-client/labels/priority%3A%20p2" class="IssueLabel d-inline-block"
	   style="background-color: #fef2c0; color: #000000;">
	  priority: p2
	</a>
	<a href="/googleapis/google-api-nodejs-client/labels/type%3A%20bug" class="IssueLabel d-inline-block"
	   style="background-color: #db4437; color: #000000;">
	  type: bug
	</a>
  </span>



  <div class="discussion-starting-comment">
	<div class="discussion-comment markdown-body hide-when-editing">
	  <h4>Environment details</h4>
	  <ul>
		<li>OS: N/A</li>
		<li>Node.js version: N/A</li>
		<li>npm version: N/A</li>
		<li><code>googleapis</code> version: "34.0.0"</li>
	  </ul>
	  <h4>Steps to reproduce</h4>
	  <p>None.<br>
		Schema$InstanceAggregatedList.items is defined as <code>?: any</code>.<br>
		This should be something like <code>?: { [key: string]?: Schema$InstancesScopedList }</code>.<br>
		The same is true for Schema$*.warning. It would be better to have those properly defined.</p>

	  <div class="comment-reactions hide-when-editing  js-reactions-container">
		<div class="comment-reactions-options ">

		  <div class="border-gray-dark js-reactions-options">
			<div class="d-flex flex-justify-start flex-wrap">


			  <details class="details-reset details-overlay details-overlay-dark my-1">
				<summary class="btn-link muted-link height-full d-block py-1 px-2 mr-2 border rounded-1 f6 border-gray-dark">
				  <svg class="octicon octicon-plus-small" viewBox="0 0 7 16" version="1.1" width="7" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z"/></svg>
				  <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
				</summary>

				<div class="details-dialog Box Box--overlay anim-fade-in fast lh-default rounded-1" role="dialog">
				  <div class="d-flex flex-row border-bottom">
					<div class="col-4">
					  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="e+8ulBr9dROjamXcDPlnqF/1M/RhYNfKfDMLfLExNpy0Z5PPYaEwdeYxsDgb9RmXe9ZYJ+459LeP7vQaZflkjQ==" />

				  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
				  <input type="hidden" name="mobile" value="yes">
				  <input type="hidden" name="input[content]" value="THUMBS_UP react">

				  <button type="submit"
						  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
						  aria-label="React with thumbs up emoji">
					<g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji">👍</g-emoji>
					<span class="f6 d-block mt-2 text-gray">+1</span>
				  </button>
				  </form>          </div>
				<div class="col-4">
				  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="esj23puRVOsYYzUzAcq8NM397cFTRUMuwWUN0tx4Xtm1QEuF4M0RjV044NcWxsIL6d6GEtwcYFMyuPK0CLAMyA==" />

			  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
			  <input type="hidden" name="mobile" value="yes">
			  <input type="hidden" name="input[content]" value="THUMBS_DOWN react">

			  <button type="submit"
					  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
					  aria-label="React with thumbs down emoji">
				<g-emoji alias="-1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png" class="emoji">👎</g-emoji>
				<span class="f6 d-block mt-2 text-gray">-1</span>
			  </button>
			  </form>          </div>008h3
			<div class="col-4">
			  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="iDi3FRo6t9kMcZ4bHcuVdX97qwFo8I+IJrIaHR0+m6BHsApOYWbyv0kqS/8Kx+tKW1jA0ueprPXVb+V7yfbJsQ==" />

		  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
		  <input type="hidden" name="mobile" value="yes">
		  <input type="hidden" name="input[content]" value="LAUGH react">

		  <button type="submit"
				  class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
				  aria-label="React with laugh emoji">
			<g-emoji alias="smile" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png" class="emoji">😄</g-emoji>
			<span class="f6 d-block mt-2 text-gray">Laugh</span>
		  </button>
		  </form>          </div>
	  </div>
	  <div class="d-flex flex-row ">
		<div class="col-4">
		  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Bs7PY2+i+BmdvfFjkZBZIToPxR8+b8gQka+bOqzz7DXJRnI4FP69f9jmJIeGnCceHiyuzLE2621icmRceDu+JA==" />

	  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
	  <input type="hidden" name="mobile" value="yes">
	  <input type="hidden" name="input[content]" value="HOORAY react">

	  <button type="submit"
			  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
			  aria-label="React with hooray emoji">
		<g-emoji alias="tada" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png" class="emoji">🎉</g-emoji>
		<span class="f6 d-block mt-2 text-gray">Hooray</span>
	  </button>
	  </form>          </div>
	<div class="col-4">
	  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Zv2AYEaaOZuAfB1C2N45Jnj/CNUG1FUFyVuujDKzYROpdT07PcZ8/cUnyKbP0kcZXNxjBomNdng6hlHq5nszAg==" />

  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
  <input type="hidden" name="mobile" value="yes">
  <input type="hidden" name="input[content]" value="CONFUSED react">

  <button type="submit"
		  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
		  aria-label="React with confused emoji">
	<g-emoji alias="thinking_face" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png" class="emoji">😕</g-emoji>
	<span class="f6 d-block mt-2 text-gray">Confused</span>
  </button>
  </form>          </div>
<div class="col-4">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="UuYDMW3sMDPiA8/EUTPnnNv3vAizpyHSRGuzhUtzDfGdbr5qFrB1VadYGiBGP5mj/9TX2zz+Aq+3tkzjn7tf4A==" />

<input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
<input type="hidden" name="mobile" value="yes">
<input type="hidden" name="input[content]" value="HEART react">

<button type="submit"
		class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
		aria-label="React with heart emoji">
  <g-emoji alias="heart" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" class="emoji">❤️</g-emoji>
  <span class="f6 d-block mt-2 text-gray">Heart</span>
</button>
</form>          </div>
</div>
</div>
</details>

</div>
</div>

</div>
</div>

</div>

</div>
</div>





<div class="discussion-event issue-event

			"
	 id="event-1895460106">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/triage%20me" class="IssueLabel d-inline-block" style="background-color: #FF69B4; color: #000000;">
	triage me
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895460106" class="timestamp"><time datetime="2018-10-10 15:09:26 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895942289">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/type%3A%20bug" class="IssueLabel d-inline-block" style="background-color: #db4437; color: #000000;">
	type: bug
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895942289" class="timestamp"><time datetime="2018-10-10 17:55:31 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895942295">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/priority%3A%20p2" class="IssueLabel d-inline-block" style="background-color: #fef2c0; color: #000000;">
	priority: p2
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895942295" class="timestamp"><time datetime="2018-10-10 17:55:31 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895942303">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/TypeScript" class="IssueLabel d-inline-block" style="background-color: #264199; color: #ffffff;">
	TypeScript
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895942303" class="timestamp"><time datetime="2018-10-10 17:55:31 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895947746">

  <strong>
	JustinBeckwith
  </strong>

  removed the
  <a href="/googleapis/google-api-nodejs-client/labels/triage%20me" class="IssueLabel d-inline-block" style="background-color: #FF69B4; color: #000000;">
	triage me
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895947746" class="timestamp"><time datetime="2018-10-10 17:57:28 +0200">about 1 month ago</time></a>
</div>

<div class="discussion-block">
  <div class="bubble cross-reference">
	<div class="bubble-title ">

	  <a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=34161822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ajaaym">ajaaym</a>
	  <strong>referenced</strong> this issue from another pull request
	</div>

	<div class="bubble-content">
	  <strong>
		<a href="/googleapis/nodejs-googleapis-common/issues/34">
		  #34 Add additionalProperties to SchemaItem
		</a>        </strong>

	  in googleapis/nodejs-googleapis-common

	</div>
  </div>
</div>



<div class="discussion-event issue-event
			closed-event
			"
	 id="event-1935962005">

  <strong>
	JustinBeckwith
  </strong>

  closed this issue
  in <a href="/googleapis/nodejs-googleapis-common/issues/34">googleapis/nodejs-googleapis-common#34</a>
  <svg class="octicon octicon-circle-slash issue-event-icon issue-event-icon-closed" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z"/></svg>


  <a href="#event-1935962005" class="timestamp"><time datetime="2018-10-30 19:40:09 +0100">15 days ago</time></a>
</div>


<div class="discussion-block">
  <div class="bubble js-comment js-comment-container js-suggested-changes-container" id="issuecomment-434425331">

	<div class="js-minimizable-comment">
	  <div class="discussion-block-title">

		<img class="avatar" height="32" width="32" alt="@ajaaym" src="https://avatars1.githubusercontent.com/u/34161822?s=88&amp;v=4" />

		<div class="discussion-block-meta">
		  <a href="/ajaaym" class="username">
			ajaaym
		  </a>

		  <br>

		  commented

		  <a href="#issuecomment-434425331"><time class="timestamp" datetime="2018-10-30 18:51:00 UTC">15 days ago</time></a>


		</div>
	  </div>

	  <div class="bubble-content pb-2 ">
		<div class="markdown-body hide-when-editing f5 p-0" data-unfurl-authenticity-token="g7i+yUmzbWJQJUFHxyiTmgbrmNk1jCW6OksttsV8zTZZShRHf52P00jIUiKKUMR/+6mxATwtq31RxupJuh5n8g==">
		  <p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=534619" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/JustinBeckwith">@JustinBeckwith</a> Can you please reopen this issue again as there is another change required in generator after <a href="https://github.com/googleapis/nodejs-googleapis-common">googleapis-common</a> is released with <a href="https://github.com/googleapis/nodejs-googleapis-common/pull/34" data-hovercard-type="pull_request" data-hovercard-url="/googleapis/nodejs-googleapis-common/pull/34/hovercard">change</a></p>
		</div>




		<div class="comment-reactions hide-when-editing has-reactions js-reactions-container">
		  <div class="comment-reactions-options mt-2">

			<div class="border-gray-dark js-reactions-options">
			  <div class="d-flex flex-justify-start flex-wrap">

				<details class="details-reset details-overlay details-overlay-dark my-1">
				  <summary class="btn-link reaction-summary-item d-block py-1 px-2 mr-2 border rounded-1 f6 border-gray-dark ">
					<g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji mr-1">👍</g-emoji>
					1
				  </summary>

				  <div class="details-dialog Box Box--overlay rounded-1 anim-fade-in fast" role="dialog">
					<div class="p-3">
					  <span class="text-bold">JustinBeckwith</span> reacted with thumbs up emoji

					  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="mt-3 js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Y3Sobq0Z69W9deIgkuCWME7q+7tkPxixDy7kCs0OgDus/BU11kWus/guN8SF7OgPasmQaOtmO8z88xtsGcbSKg==" />
				  <input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
				  <input type="hidden" name="mobile" value="yes">
				  <input type="hidden" name="input[content]" value="THUMBS_UP react">

				  <button type="submit" class="btn btn-block">
					Add my <g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji ml-1">👍</g-emoji>
				  </button>
				  </form>    </div>
			  </div>
			  </details>



			<details class="details-reset details-overlay details-overlay-dark my-1">
			  <summary class="btn-link muted-link height-full d-block py-1 px-2 mr-2 border rounded-1 f6 border-gray-dark">
				<svg class="octicon octicon-plus-small" viewBox="0 0 7 16" version="1.1" width="7" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z"/></svg>
				<svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
			  </summary>

			  <div class="details-dialog Box Box--overlay anim-fade-in fast lh-default rounded-1" role="dialog">
				<div class="d-flex flex-row border-bottom">
				  <div class="col-4">
					<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="K7G65KIHVSDHZ4HrFAe5yzSGI1ZXCmHvQoGr0sdanQjkOQe/2VsQRoI8VA8DC8f0EKVIhdhTQpKxXFS0E5LPGQ==" />

				<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
				<input type="hidden" name="mobile" value="yes">
				<input type="hidden" name="input[content]" value="THUMBS_UP react">

				<button type="submit"
						class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
						aria-label="React with thumbs up emoji">
				  <g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji">👍</g-emoji>
				  <span class="f6 d-block mt-2 text-gray">+1</span>
				</button>
				</form>          </div>
			  <div class="col-4">
				<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="sGmf0Noj8VdynHzp2iJvFEEOEhV6czzc0d++4qY11hh/4SKLoX+0MTfHqQ3NLhErZS15xvUqH6EiAkGEcv2ECQ==" />

			<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
			<input type="hidden" name="mobile" value="yes">
			<input type="hidden" name="input[content]" value="THUMBS_DOWN react">

			<button type="submit"
					class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
					aria-label="React with thumbs down emoji">
			  <g-emoji alias="-1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png" class="emoji">👎</g-emoji>
			  <span class="f6 d-block mt-2 text-gray">-1</span>
			</button>
			</form>          </div>
		  <div class="col-4">
			<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="JlXnMochRTpP82ezXNcXP0CkfVWSxMzMYwosAABknyXp3Vpp/H0AXAqosldL22kAZIcWhh2d77GQ19Nm1KzNNA==" />

		<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
		<input type="hidden" name="mobile" value="yes">
		<input type="hidden" name="input[content]" value="LAUGH react">

		<button type="submit"
				class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
				aria-label="React with laugh emoji">
		  <g-emoji alias="smile" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png" class="emoji">😄</g-emoji>
		  <span class="f6 d-block mt-2 text-gray">Laugh</span>
		</button>
		</form>          </div>
	</div>
	<div class="d-flex flex-row ">
	  <div class="col-4">
		<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="+CG4AFDK/bB4AT78j0X2BKTHjA3yiqJewzsEfszGBEQ3qQVbK5a41j1a6xiYSYg7gOTn3n3TgSMw5vsYGA5WVQ==" />

	<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
	<input type="hidden" name="mobile" value="yes">
	<input type="hidden" name="input[content]" value="HOORAY react">

	<button type="submit"
			class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
			aria-label="React with hooray emoji">
	  <g-emoji alias="tada" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png" class="emoji">🎉</g-emoji>
	  <span class="f6 d-block mt-2 text-gray">Hooray</span>
	</button>
	</form>          </div>
  <div class="col-4">
	<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="oMOs2TeI1wtNK626M87oKUMgIFOXbOAykD7uwTzjqsVvSxGCTNSSbQhweF4kwpYWZwNLgBg1w09j4xGn6Cv41A==" />

<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
<input type="hidden" name="mobile" value="yes">
<input type="hidden" name="input[content]" value="CONFUSED react">

<button type="submit"
		class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
		aria-label="React with confused emoji">
  <g-emoji alias="thinking_face" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png" class="emoji">😕</g-emoji>
  <span class="f6 d-block mt-2 text-gray">Confused</span>
</button>
</form>          </div>
<div class="col-4">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="A8XRTusp5XZd1ilXBnwOYpK/lmkGeMYtrvrh0nA0MufMTWwVkHWgEBiN/LMRcHBdtpz9uokh5VBdJx60pPxg9g==" />

<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
<input type="hidden" name="mobile" value="yes">
<input type="hidden" name="input[content]" value="HEART react">

<button type="submit"
		class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
		aria-label="React with heart emoji">
  <g-emoji alias="heart" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" class="emoji">❤️</g-emoji>
  <span class="f6 d-block mt-2 text-gray">Heart</span>
</button>
</form>          </div>
</div>
</div>
</details>

</div>
</div>

</div>
</div>

</div>
</div>
</div>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1936146918">

  <strong>
	JustinBeckwith
  </strong>

  reopened this issue
  <svg class="octicon octicon-primitive-dot issue-event-icon issue-event-icon-open" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>


  <a href="#event-1936146918" class="timestamp"><time datetime="2018-10-30 20:58:10 +0100">15 days ago</time></a>
</div>

<div class="discussion-block">
  <div class="bubble cross-reference">
	<div class="bubble-title ">

	  <a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=34161822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ajaaym">ajaaym</a>
	  <strong>referenced</strong> this issue from another pull request
	</div>

	<div class="bubble-content">
	  <strong>
		<a href="/googleapis/nodejs-googleapis-common/issues/39">
		  #39 Release googleapis-common v0.4.0
		</a>        </strong>

	  in googleapis/nodejs-googleapis-common

	</div>
  </div>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1957793369">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/ajaaym/google-api-nodejs-client/commit/3491167ceefd3cd78ad036bda4b4c4ee1fcac141">3491167</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1957793369" class="timestamp"><time datetime="2018-11-09 21:34:01 +0100">5 days ago</time></a>
</div>

<div class="discussion-block">
  <div class="bubble cross-reference">
	<div class="bubble-title ">

	  <a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=34161822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ajaaym">ajaaym</a>
	  <strong>referenced</strong> this issue from another pull request
	</div>

	<div class="bubble-content">
	  <strong>
		<a href="/googleapis/google-api-nodejs-client/issues/1433">
		  #1433 Fix #1383 Poor Typings for Schema
		</a>        </strong>


	</div>
  </div>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1957801223">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/ajaaym/google-api-nodejs-client/commit/4fc391c7a7ae6ee39bf5671cd8126e472a3a4712">4fc391c</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1957801223" class="timestamp"><time datetime="2018-11-09 21:38:21 +0100">5 days ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1962962464">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/ajaaym/google-api-nodejs-client/commit/676429ff3f24d136b47392084c3c29d1d3616844">676429f</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1962962464" class="timestamp"><time datetime="2018-11-13 14:05:46 +0100">1 day ago</time></a>
</div>



<div class="discussion-event issue-event
			closed-event
			"
	 id="event-1966088188">

  <strong>
	ajaaym
  </strong>

  closed this issue
  in <a href="/googleapis/google-api-nodejs-client/issues/1433">#1433</a>
  <svg class="octicon octicon-circle-slash issue-event-icon issue-event-icon-closed" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z"/></svg>


  <a href="#event-1966088188" class="timestamp"><time datetime="2018-11-14 15:57:18 +0100">about 2 hours ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1966088390">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/googleapis/google-api-nodejs-client/commit/fd9eb79544ab3187f50cdef675169f898992c73f">fd9eb79</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1966088390" class="timestamp"><time datetime="2018-11-14 15:57:22 +0100">about 2 hours ago</time></a>
</div>



<a name="bottom" id="bottom"></a>



<div class="discussion-block-header">
  Comment on issue
</div>
<div class="discussion-reply-container">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/googleapis/google-api-nodejs-client/issue_comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="tnHoVNMyfzV144TCnNJxH0aMCTI7C/61tMFWhL6f5nzVRs9kCaXwHMhkUzhQOAxb3aWpLV7sbRHFVQPyJIl29Q==" />
<div class="discussion-reply">
  <input type="hidden" name="issue" value="1383">
  <textarea class="form-control input-block js-comment-and-field" name="comment[body]" placeholder="Leave a comment" rows="5"></textarea>

  <div class="button-container">

	<button type="submit" class="btn btn-primary" data-disable-with="Commenting…">Comment</button>
  </div>
</div>
</form></div>


<div class="discussion-block-header">
  Notifications for this thread
</div>
<div id="thread-subscription-status" class="thread-subscription-status">
  <p class="thread-subscription-description">
	<svg height="32" class="octicon octicon-radio-tower" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z"/></svg>
	You’re receiving notifications because you’re watching this repository.
  </p>
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="thread-subscribe-form" action="/notifications/thread" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="GN6OmBja4qbxqPjHLhdgw8ALcgiDkJL32X5xZO3eiC0QSUObR/rA2q9RlcxCtt1qQHZaiVLpEKk3chbj2j3xeg==" />    <input type="hidden" name="repository_id" id="repository_id" value="8608480" class="form-control" />
<input type="hidden" name="thread_id" id="thread_id" value="368398206" class="form-control" />
<input type="hidden" name="thread_class" id="thread_class" value="Issue" class="form-control" />
<input type="hidden" name="id" id="id" value="mute" class="form-control" />

<button class="btn btn-block" type="submit" data-disable-with="Submitting…">
  <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
  Unsubscribe
</button>
</form></div>



<footer class="clearfix">
  <div class="container">
	<a href="#"><svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>

	<ul class="clearfix">
	  <li>
		<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-preference-form" action="/site/mobile_preference" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="OxoI9zfoJvakEH+9VUorM6ujrsAe0Y2ec8G1KterZTtXcpwbQPb3356GMNO5muqfEe4g0URoE1KLOTmAt66vNg==" />
  <input type="hidden" name="mobile" value="false">
  <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

  <button type="submit" class="switch-to-desktop" data-ga-click="Mobile, switch to desktop, switch button">
	Desktop version
  </button>
  </form>(/li> shoppingandmore2017 / https-rabatteundgutscheine.wordpress.com-

Your account has been flagged.

Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.

Code Issues 0 Pull requests 0 Projects 2 Wiki Pulse Community

view

html lang="De"><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="b85b462e6888d82" content="1f161cd5a3afcbfaac2eaa43b85b3f89" /> <meta name="google-site-verification" content="FvadgHWOiqjkeEcd2zffF6QGthpgUPuRt5OMAPLhTes" /> <meta name="verification" content="5beb210f277740818ab1e9c19d5e8a6a" /> <title>Finde den Code</title> <meta name="keywords" content="" /> <meta name="description" content="" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta property="og:title" content=""/> <meta property="og:description" content=""/> <meta property="og:image" content=""/> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <link rel="alternate" hreflang="De" href="https://www.cashbackdeals.de/user/find-the-code.php" /> <link rel="canonical" href="https://www.cashbackdeals.de/user/find-the-code.php"/> <link rel="icon" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/favicon.ico" type="image/x-icon"> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/layout.css" rel="stylesheet" type="text/css" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/popup/popup.css" rel="stylesheet" type="text/css" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/help.css" rel="stylesheet" type="text/css" /> <link href="/general.assets/js/jquery-ui/jquery-ui.min.css" rel="stylesheet" type="text/css" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/popup.style.css" rel="stylesheet" type="text/css" /> <link rel="stylesheet" type="text/css" href="/general.assets/css/sexy-captcha/styles.css" /> <link href="/general.assets/libs/SpryAssets/SpryCollapsiblePanel.css" type="text/css" rel="stylesheet" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/popup/css" type="text/css" rel="stylesheet" media="screen" /> <link rel="stylesheet" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/jquery.fancybox-visit.css" type="text/css" media="screen" /> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationTextField.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationTextarea.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationCheckbox.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/validation.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationPassword.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/css/jquery.counter-analog.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/css/date_picker/flora.datepick.css" /> <link href="/general.assets/css/reviews.css" rel="stylesheet" /> <link rel="stylesheet" type="text/css" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/find-code.css"/> <!--Home trending box tabs --> <link rel="stylesheet" type="text/css" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/home-trend-tab.css" /> <script type="text/javascript" src="/general.assets/js/jquery.min.js"></script> <script type="text/javascript" src="/general.assets/js/modernizr.custom.js"></script> <script src="/general.assets/js/jquery-ui/jquery-ui.min.js"></script> <script type="text/javascript" src="/general.assets/js/jquery.sexy-captcha-0.1.js"></script> <script type="text/javascript" src="/general.assets/js/jquery.barrating.min.js"></script> <script src="/general.assets/libs/SpryAssets/SpryCollapsiblePanel.js" type="text/javascript"></script> <script type="text/javascript" src="/general.assets/libs/fancybox/jquery.fancybox.pack.js"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationTextField.js" type="text/javascript"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationTextarea.js" type="text/javascript"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationCheckbox.js" type="text/javascript"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationPassword.js" type="text/javascript"></script> <script src="/general.assets/js/jquery.counter.js" type="text/javascript"></script> <script src="/general.assets/js/jquery.datepick.js" type="text/javascript"></script> <script src="/general.assets/js/jquery.datepick-de.js" type="text/javascript"></script> <!-- OneSignal --> <link rel="manifest" href="/manifest.json"> <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script> 	 <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/responsive.css" rel="stylesheet" type="text/css" /> <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" /> <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css' /> <link href='https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' rel='stylesheet' type='text/css' /> <link href="/general.assets/css/icon-fonts/font.css" rel="stylesheet" type="text/css" /> <link href="https://plus.google.com/106394136536174905587" rel="publisher"> <script> var gaProperty = 'UA-45187893-1'; var disableStr = 'ga-disable-' + gaProperty; if (document.cookie.indexOf(disableStr + '=true') > - 1) { window[disableStr] = true; } function gaOptout() { document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'; window[disableStr] = true; } (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga'); ga('create', 'UA-45187893-1', 'auto'); ga('set', 'anonymizeIp', true); ga('send', 'pageview'); $(document).ready(function () { $("#menu_icon").click(function () { $(".burger_menu").toggle(); }); $(".cat-menu").click(function () { $(".CatLinkCont").toggle(); }); /* Header Messager Timer */ if ($('#timer').length > 0) { var timer; var compareDate = new Date(''); compareDate.setDate(compareDate.getDate() + parseInt('')); compareDate.setHours(23); compareDate.setMinutes(59); compareDate.setSeconds(59); timer = setInterval(function () { timeBetweenDates(compareDate); }, 1000); function timeBetweenDates(toDate) { var dateEntered = toDate; var now = new Date(); var difference = dateEntered.getTime() - now.getTime(); if (difference <= 0) { // Timer done clearInterval(timer); $('#timer').css('visibility', 'hidden'); } else { var seconds = Math.floor(difference / 1000); var minutes = Math.floor(seconds / 60); var hours = Math.floor(minutes / 60); var days = Math.floor(hours / 24); hours %= 24; minutes %= 60; seconds %= 60; $("#days").text(days); $("#hours").text(hours); $("#minutes").text(minutes); $("#seconds").text(seconds); } } } }); </script> <script type="text/javascript"> $(document).ready(function () { $("h2.cat-icon").click(function () { $(".categoryContainerHeader").toggle(); }); $("h2.account-icon").click(function () { $(".todoContainerHeader").hide(); $(".myAcoountContainerHeader").toggle(); }); $("h2.todo-icon").click(function () { $(".myAcoountContainerHeader").hide(); $(".todoContainerHeader").toggle(); }); }); </script> </head> <div id="fb-root"></div> <script src="/general.assets/js/fb_login.js" type="text/javascript"></script> <body> <section class="bodyWrapper" onclick="closeCookieBar();"> <!-- ADMIN BAR start --> <!-- ADMIN BAR end --> <!-- Takeover Different banner code start --> <!-- takeover diff banner code end --> <div class="leftBanner main_banner"> <a class="various" href="#inline_store_visit" onClick="loginFancyPopUP({cashback: '4,00%', storeName: 'Under Armour', urlKey: 'under-armour-de', imgUrl: 'https://static.orangebuddies.nl/image/stores/85175.gif', itemId: '0', bannerId: '35627', isCbkDay: '0'})" title="Under Armour"><img class="main_sidebanner" width="120" height="400" src="https://static.orangebuddies.nl/image/banners/35627-SkyScraperWrapper.jpg" alt="Under Armour" /></a> <img src="" width="0" height="0" style="display:none"/> </div> <!-- new --> <div id="top-container" class="clearfix"> <div id="top"> <span class="top-usp"> </span> <div id="top-subscribe"> <span><a href="javascript:void(0);" class="t-user active"><i class="fa fa-globe" aria-hidden="true"></i> </i></a> <div> <div class="column"> <ul> <li><a target="_blank" href="https://www.cashbackkorting.nl/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/netherlands.jpg" alt="netherlands-flag" title ="netherlands-flag"></span> <span> Cashbackkorting.nl<!--Niederlande--></span> </a> </li> <li> <a target="_blank" href="http://www.cashbackdeals.be/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/belgium.jpg" alt="belgium-flag" title ="belgium-flag"></span> <span> Cashbackdeals.be<!--Belgien--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackreduction.fr/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/france.jpg" alt="france-flag" title ="france-flag"></span> <span> Cashbackreduction.fr<!--Frankreich--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.de/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/germany.jpg" alt="germany-flag" title ="germany-flag"></span> <span> Cashbackdeals.de<!--Deutschland--></span> </a> </li> <li><a target="_blank" href="https://www.cashbacksparen.at/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/austria.jpg" alt="austria-flag" title ="austria-flag"></span> <span> Cashbacksparen.at<!--Österreich--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.ch/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/switzerland.jpg" alt="switzerland-flag" title ="switzerland-flag"></span> <span> Cashbackdeals.ch<!--Schweiz--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackrabat.pl/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/poland.jpg" alt="poland-flag" title ="poland-flag"></span> <span> Cashbackrabat.pl<!--Polen--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.it/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/italy.jpg" alt="italy-flag" title ="italy-flag"></span> <span> Cashbackdeals.it<!--Italien--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackearners.co.uk/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/uk.jpg" alt="uk-flag" title ="uk-flag"></span> <span> Cashbackearners.co.uk<!--England--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.se/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/sweden.jpg" alt="sweden-flag" title ="sweden-flag"></span> <span> Cashbackdeals.se<!--Schweden--></span> </a> </li> <li> <a target="_blank" href="http://www.cashbackdeals.es/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/spain.png" alt="spain-flag" title ="spain-flag"></span> <span> Cashbackdeals.es<!--Spanien--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.fi/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/finland.png" alt="finland-flag" title ="finland-flag" /></span><span> Cashbackdeals.fi<!--Finnland--></span></a> </li> <li><a target="_blank" href="https://www.cashbackearners.com/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/usa.png" alt="usa-flag" title ="usa-flag" /></span><span> Cashbackearners.com<!--Finnland--></span></a> </li> <li><a target="_blank" href="https://www.cashbackearners.com.au/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/australia.png" alt="australia-flag" title ="australia-flag" /></span><span> Cashbackearners.com.au</span></a> </li> <li><a target="_blank" href="https://www.cashbackearners.ca/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/Canada.png" alt="canada-flag" title ="canada-flag"></span> <span> Cashbackearners.ca </span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.dk/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/denmark.png" alt="denmark-flag" title ="denmark-flag" /></span><span> Cashbackdeals.dk</span></a> </li> <li><a target="_blank" href="https://www.cashbackdeals.cz/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/czech.png" alt="czech-flag" title ="czech-flag" /></span><span> Cashbackdeals.cz</span></a> </li> <li><a target="_blank" href="https://www.cashbackdeals.no/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/norway.jpg" alt="norway-flag" title ="norway-flag" /></span><span> Cashbackdeals.no</span></a> </li> <li><a target="_blank" href="https://www.cashbackdeals.pt/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/portugal.png" alt="portugal-flag" title ="portugal-flag" /></span><span> Cashbackdeals.pt</span></a> </li> </ul> </div> </div> </span> <span class="w-user"> <a href="/" class="t-user active"><i class="fa fa-user"></i> Willkommen Jasmin</a> <div> <div class="column"> <ul> <li><a href="/user/cashback.php"><i class="fa fa-database"></i> Saldo 21,720</a></li> <li><a href="/user/welcome.php"><i class="fa fa-pencil"></i> Mein Konto</a></li> <li><a href="/user/cashmail.php"><i class="fa fa-envelope"></i> Posteingang (73)</a></li> <li><a href="/user/logout.php"><i class="fa fa-power-off"></i> Ausloggen</a></li> </ul> </div> </div> </span> <span class="notifi-dd"> <sapn class="notifi-icon"> <a href="javascript:void(0)"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/notify_bell.png"></a> <span class="notifi-no">0</span> </sapn>	 <div class="notifi-list"> <ul> <li class="no-notifi"> Keine neue Benachrichtigungen </li> <li class="notifi-all"> <span><a href="/user/notifications.php">Alle Benachrichtigungen anzeigen</a></span>	 </li> </ul> </div>	 </span> <span class="top-help"> <a href="/static/help" class="t-help t-user active"><i class="fa fa-info-circle"></i> Hilfe</a> <div> <div class="column"> <ul> <li><a href="/static/faq.php"><i class="fa fa-question-circle"> </i>FAQ</a></li> <li><a href="/static/contact.php"><i class="fa fa-comment-o"></i> Anfrage stellen </a></li> <li><a href="/user/generateticket.php"><i class="fa fa-cart-plus"></i> Antrag für fehlende Transaktion stellen </a></li> <li><a href="/user/ticket.php"><i class="fa fa-ticket"> </i>Deine Hilfe-Tickets </a></li> </ul> </div> </div> </span> </div> </div> </div> <!-- end new --> <!-- Header --> <div id="header"> <a href="/" title="CashbackDeals.de"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/logo.png" alt="CashbackDeals.de" id="logo" /> </a> <div id="search"> <input type="hidden" name="lbl_find_shop_action" id="lbl_find_shop_action" value="Suche Shop, Produkt oder Deal" /> <form method="get" action="/search/search.php" id="frmMainSearch"> <input type="text" autocomplete="off" class="search-field" value="Suche Shop, Produkt oder Deal" name="q" id="searchinput" onKeyUp="getSearchResults(this.value, 'searchBox', 'search_results.php', '', 'searchChkbox')" /> <div class="searc-selection"> <button type="button" class="searc-SDD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-caret-down"></i></button> <div class="searc-SDC" style=""> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="store" value="store" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > Shops</label></span> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="deal" value="deal" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > Angebote</label></span> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="category" value="category" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > Kategorien</label></span> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="faq" value="faq" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > FAQ</label></span> </div>	 </div> <input type="submit" value='' class="search-submit" id="searchbtn" /> <div style="background: none repeat scroll 0 0 #FFFFFF;display:none;margin-top:29px;position:absolute;width:250px;z-index:222;" id="searchBox"></div> </form> <div id="search-tips"> Tipps: <a href="/cashback/vodafone-mobilfunk.php">Vodafone (Mobilfunk & Data)</a> <a href="/cashback/deutsche-postbank.php">Postbank</a> <a href="/cashback/bonprixde.php">bonprix</a> <a href="/cashback/blau-mobilfunk-de.php">blau Mobilfunk</a> </div> </div> <script type="application/ld+json"> { "@context": "http://schema.org", "@type": "WebSite", "url": "https://www.cashbackdeals.de/", "potentialAction": { "@type": "SearchAction", "target": "https://www.cashbackdeals.de/search/search.php?q={search_term}", "query-input": "required name=search_term" } } </script> </div> <div id="container" class="clearfix"> <div id="menu"> <h1 class="heading-1" style="display: none;"><a href="https://www.cashbackdeals.de/">Verdiene Geld mit :</a></h1> <ul> <li><a href="/shops/shops.php?url_key=all">Shoppen</a> <div> <div class="nav-column"> <h3> <a href="/shops/all-categories.php">Kategorien</a> </h3> <ul> <li><a href="/shops/category-overview.php?url_key=baby-und-kind">Baby & Kind</a></li> <li><a href="/shops/category-overview.php?url_key=bucher-und-zeitschriften">Bücher & Zeitschriften</a></li> <li><a href="/shops/category-overview.php?url_key=geschenke-und-gadgets">Geschenke & Gadgets</a></li> <li><a href="/shops/category-overview.php?url_key=computer">Elektronik & Unterhaltung</a></li> <li><a href="/shops/category-overview.php?url_key=foto-und-kamera">Foto & Kamera</a></li> <li><a href="/shops/category-overview.php?url_key=mode">Mode & Fashion</a></li> <li><a href="/shops/category-overview.php?url_key=finanzen">Finanzen & Strom</a></li> <li><a href="/shops/category-overview.php?url_key=haushalt">Haushalt</a></li> <li><a href="/shops/category-overview.php?url_key=games-filme-und-musik">Games, Filme & Musik</a></li> <li><a href="/shops/all-categories.php" class="nav-all">Alle Kategorien</a></li> </ul> </div> <div class="nav-column"> <h3> <a href="/shops/shops.php?url_key=all">Shoppen</a> </h3> <ul> <li> <a href="/cashback/na-kd-com.php">NA-KD.com</a> </li> <li> <a href="/cashback/vodafone-dsl.php">Vodafone (DSL, LTE & TV)</a> </li> <li> <a href="/cashback/blau-mobilfunk-de.php">blau Mobilfunk</a> </li> <li> <a href="/cashback/nord-vpn-de.php">NordVPN</a> </li> <li> <a href="/cashback/agila.php">AGILA</a> </li> <li> <a href="/cashback/groupon-shopping.php">Groupon Shopping</a> </li> <li> <a href="/cashback/o2-de.php">O2</a> </li> <li> <a href="/cashback/tarifcheck24.php">TARIFCHECK</a> </li> <li> <a href="/cashback/saturn.php">SATURN</a> </li> <li> <a href="/cashback/vodafone-mobilfunk.php">Vodafone (Mobilfunk & Data)</a> </li> <li> <a href="/shops/shops.php?url_key=all" class="nav-all">Alle Online-Shops</a> </li> </ul> </div> <div class="nav-column"> <h3><a href="/shops/newshops.php">Neue Shops</a></h3> <ul> <li> <a href="/cashback/studienwelt-laudius-kursteilnahme.php">Studienwelt Laudius (Kursteilnahme)</a> </li> <li> <a href="/cashback/zotter-schokoladen-manufaktur-de.php">Zotter Schokoladen Manufaktur</a> </li> <li> <a href="/cashback/neckermann-moebel-und-heimtextilien-de.php">Neckermann Möbel & Heimtextilien</a> </li> <li> <a href="/cashback/mrlens-de.php">MrLens</a> </li> <li> <a href="/cashback/callmobile-de.php">callmobile</a> </li> <li> <a href="/cashback/dr-goerg-de.php">Dr. Goerg</a> </li> <li> <a href="/cashback/galerie-liebherr-de.php">Galerie Liebherr</a> </li> <li> <a href="/cashback/goodydogde-de.php">Goodydog.de</a> </li> <li> <a href="/cashback/gooodde-de.php">goood</a> </li> <li> <a href="/cashback/lieblingsmensch24de-de.php">lieblingsmensch24.de</a> </li> <li><a class="nav-all" href="/shops/newshops.php">Alle neuen Shops ansehen </a></li> </ul> </div> <div class="nav-action"> </div> </div> </li> <li> <a href="/shops/deals.php">Angebote</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li> <a href="/shops/dailydeals-service.php">Tagesangebote </a> </li> <li> <a href="/shops/deals.php?type=kortingscodes">Rabattcodes </a> </li> <li> <a href="/shops/deals.php?type=last">Letzte Chance </a> </li> <li> <a href="/shops/deals.php?type=new">Neue Angebote </a> </li> <li> <a href="/shops/deals.php?type=tip">Beliebte Angebote </a> </li> <li> <a href="/shops/deals.php?type=special">Sonderangebote </a> </li> <li> <a href="/static/manufacturer-cashback/">Cashback-Aktionen der Hersteller </a> </li> </ul> </div> </div> </li> <li><a href="/comparison/">Vergleich</a></li> <li><a href="/shops/shops.php">Gratis </a></li> <li><a href="/static/earn-money.php">Sofort Verdienst</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li><a href="/user/cashmail.php">CashMails </a></li> <li><a href="/shops/bannerkliks.php">Bannerklicks </a></li> <li><a href="/shops/click-earn-campaigns.php">Klicken und Verdienen </a></li> <li><a href="/shops/delen.php">Teilen </a></li> <li><a href="/user/inbox-surveys.php">Umfragen </a></li> <li><a href="/static/whatsapp.php">WhatsApp </a></li> </ul> </div> </div> </li> <li><a href="/user/cashboost-new.php">Cashboost</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li> <a href="/user/detail.php"> Profil ergänzen </a> </li> <li> <a href="/user/cashboost.php"> Freunde einladen </a> </li> <li> <a href="/static/mobile-app.php"> App installieren </a> </li> <li> <a href="/static/toolbar.php"> Cashback-Melder downloaden </a> </li> <li> <a href="/testimonials/add.php"> Empfehlung schreiben </a> </li> <li> <a href="/shops/reviews.php"> Online-Shops bewerten </a> </li> <li> <a href="/static/top-campaigns.php"> Top Deals </a> </li> <li> <a href="/spellen/"> Spiele </a> </li> <li> <a href="/onlinepanel/"> Online Panels </a> </li> <li> <a href="/comparison/"> Vergleich </a> </li> </ul> </div> </div> </li> <li><a href="/shops/win-competition.php">Gewinnen</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li> <a href="/user/sports-predictions.php"> Ergebnis voraussagen </a> </li> <li> <a href="/user/competitions/"> Aktionen/Wettbewerbe </a> </li> <li> <a href="/user/lottery.php"> Lotterie </a> </li> <li> <a href="/user/jackpot.php"> Jackpot </a> </li> <li> <a href="/user/bingo.php"> Bingo </a> </li> <li> <a href="/user/find-the-code.php"> Finde den Code </a> </li> </ul> </div> </div> </li> <li><a href="/blog/">Blog</a></li> <li class="download-app-menu"><a class="app-icon" href="/static/mobile-app.php"><div class="download-app"><span>APP</span></div> </a></li> <li class="download-app-menu"><a class="app-icon" href="/static/toolbar.php"><div class="alert-bar"><span>Alert</span></div> </a></li> </ul> </div> <!--- responseiv menu--> <div class="burgermenu"> <div id="menu_icon"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/burger_menu.png" alt="Menu" title ="Menu" width="20px" height="16px"> Verdiene Geld mit</div> <div class="resp-app-button"> <a class="app-icon" href="/static/mobile-app.php"> <div class="download-app"><span>APP</span></div> </a> <a class="app-icon" href="/static/toolbar.php"> <div class="alert-bar"><span>Alert</span></div> </a> </div> <div class="burger_menu"> <ul class="cd-accordion-menu"> <li class="has-children"> <input type="checkbox" name="group-1" id="group-1"> <label for="group-1">Shoppen</label> <ul> <li class="has-children"> <input type="checkbox" name="sub-group-1" id="sub-group-1"> <label for="sub-group-1">Kategorien</label> <ul> <li><a href="/shops/category-overview.php?url_key=baby-und-kind">Baby & Kind</a></li> <li><a href="/shops/category-overview.php?url_key=bucher-und-zeitschriften">Bücher & Zeitschriften</a></li> <li><a href="/shops/category-overview.php?url_key=geschenke-und-gadgets">Geschenke & Gadgets</a></li> <li><a href="/shops/category-overview.php?url_key=computer">Elektronik & Unterhaltung</a></li> <li><a href="/shops/category-overview.php?url_key=foto-und-kamera">Foto & Kamera</a></li> <li><a href="/shops/category-overview.php?url_key=mode">Mode & Fashion</a></li> <li><a href="/shops/category-overview.php?url_key=finanzen">Finanzen & Strom</a></li> <li><a href="/shops/category-overview.php?url_key=haushalt">Haushalt</a></li> <li><a href="/shops/category-overview.php?url_key=games-filme-und-musik">Games, Filme & Musik</a></li> </ul> </li> <li class="NoSubMenu"><a href="/shops/all-categories.php" target="_self">Alle Kategorien</a></li> <li class="has-children"> <input type="checkbox" name="sub-group-2" id="sub-group-2"> <label for="sub-group-2">Shoppen</label> <ul> <li> <a href="/cashback/na-kd-com.php">NA-KD.com</a> </li> <li> <a href="/cashback/vodafone-dsl.php">Vodafone (DSL, LTE & TV)</a> </li> <li> <a href="/cashback/blau-mobilfunk-de.php">blau Mobilfunk</a> </li> <li> <a href="/cashback/nord-vpn-de.php">NordVPN</a> </li> <li> <a href="/cashback/agila.php">AGILA</a> </li> <li> <a href="/cashback/groupon-shopping.php">Groupon Shopping</a> </li> <li> <a href="/cashback/o2-de.php">O2</a> </li> <li> <a href="/cashback/tarifcheck24.php">TARIFCHECK</a> </li> <li> <a href="/cashback/saturn.php">SATURN</a> </li> <li> <a href="/cashback/vodafone-mobilfunk.php">Vodafone (Mobilfunk & Data)</a> </li> </ul> </li> <li><a href="/shops/shops.php?url_key=all" target="_self">Alle shops</a></li> <li class="has-children"> <input type="checkbox" name="sub-group-3" id="sub-group-3"> <label for="sub-group-3">Hervorgehoben</label> <ul> <li><a href="/shops/deals.php">Angebote</a></li> </ul> </li> </ul> </li> <li class="has-children"> <input type="checkbox" name="sub-group-4" id="sub-group-4"> <label for="sub-group-4">Angebote</label> <ul> <li> <a href="/shops/dailydeals-service.php">Tagesangebote </a> </li> <li> <a href="/shops/deals.php?type=kortingscodes">Rabattcodes </a> </li> <li> <a href="/shops/deals.php?type=new">Neue Angebote </a> </li> <li> <a href="/shops/deals.php?type=tip">Beliebte Angebote </a> </li> <li> <a href="/shops/deals.php?type=special">Sonderangebote </a> </li> <li> <a href="/static/manufacturer-cashback/">Cashback-Aktionen der Hersteller </a> </li> </ul> </li> <li><a href="/comparison/" target="_self">Vergleich</a></li> <li><a href="/shops/shops.php" target="_self">Gratis</a></li> <li class="has-children"> <input type="checkbox" name="sub-group-5" id="sub-group-5"> <label for="sub-group-5">Sofort Verdienst</label> <ul> <li><a href="/user/cashmail.php">CashMails </a></li> <li><a href="/shops/bannerkliks.php">Bannerklicks </a></li> <li><a href="/shops/click-earn-campaigns.php">Klicken und Verdienen </a></li> <li><a href="/shops/delen.php">Teilen </a></li> <li><a href="/static/whatsapp.php">WhatsApp </a></li> </ul> </li> <li class="has-children"> <input type="checkbox" name="sub-group-6" id="sub-group-6"> <label for="sub-group-6">Cashboost</label> <ul> <li> <a href="/user/detail.php"> Profil ergänzen </a> </li> <li> <a href="/user/cashboost.php"> Freunde einladen </a> </li> <li> <a href="/static/mobile-app.php"> App installieren </a> </li> <li> <a href="/static/toolbar.php"> Cashback-Melder downloaden </a> </li> <li> <a href="/testimonials/add.php"> Empfehlung schreiben </a> </li> <li> <a href="/shops/reviews.php"> Online-Shops bewerten </a> </li> <li> <a href="/static/top-campaigns.php"> Top Deals </a> </li> <li> <a href="/spellen/"> Spiele </a> </li> <li> <a href="/onlinepanel/"> Online Panels </a> </li> <li> <a href="/comparison/"> Vergleich </a> </li> </ul> </li> <li class="has-children"> <input type="checkbox" name="sub-group-7" id="sub-group-7"> <label for="sub-group-7">Gewinnen</label> <ul> <li> <a href="/user/sports-predictions.php"> Ergebnis voraussagen </a> </li> <li> <a href="/user/competitions/"> Aktionen/Wettbewerbe </a> </li> <li> <a href="/user/lottery.php"> Lotterie </a> </li> <li> <a href="/user/jackpot.php"> Jackpot </a> </li> <li> <a href="/user/bingo.php"> Bingo </a> </li> <li> <a href="/user/find-the-code.php"> Finde den Code </a> </li> </ul> </li> <li> <a href="/blog/" target="_self">Blog</a> </li> </ul> </div> </div> <!-- end of responsive --> <div id="main"> <div id="main-content"> <div class="alert-popup-wrap"> <div class="alert-popup-content" id=""> <div class="alert-popup-exit"></div> </div> </div> <!-- Content --> <div id="main-content"> <div id="breadcrumbs"> <ol itemscope itemtype="http://schema.org/BreadcrumbList"> <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="https://www.cashbackdeals.de/"> <span itemprop="name">Startseite</span></a> <meta itemprop="position" content="1" /> </li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="https://www.cashbackdeals.de/shops/win-competition.php"> <span itemprop="name">Gewinnen</span></a> <meta itemprop="position" content="2" /> </li><li>Finde den Code</li></ol> </div> <div class="CodeImg"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/coupon-code/Find-a-code-Banner.png" alt=""></div> <div class="ClaimTxtBox"> Finde den Code! Wir verstecken jedes Wochenende einen Geheimcode auf unserer Website. Jeden Freitag bis Sonntag kannst du den Code suchen und zusätzliche CashCoins gewinnen. </div> <div class="dropdown-out" id="dout"> <div class="reward_heading"> <h3>Belohnung für Mitglieder</h3> <p>Du kannst <span>0,05</span> bis <span>10,00</span> CashCoins gewinnen. Für jeden Code, den du auf unserer Webseite gefunden hast, bekommst du 0,01 CashCoins. Du bekommst die Belohnung einmal pro Code, der gefunden wurde.</p> </div> <div class="fc-reward-table"> <div class="fc-reward-row fc-reward-heading"> <div class="fc-reward-member">Zusätzliche Belohnung pro Gewinner</div> <div class="fc-reward-cashion">Belohnung</div> </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">10de lid</div> 	 <div class="fc-reward-cashion">0,05</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">25ste lid</div> 	 <div class="fc-reward-cashion">0,10</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">50ste lid</div> 	 <div class="fc-reward-cashion">0,25</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">100ste lid</div> 	 <div class="fc-reward-cashion">1,00</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">250ste lid</div> 	 <div class="fc-reward-cashion">2,50</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">500ste lid</div> 	 <div class="fc-reward-cashion">5,00</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">1000ste lid</div> 	 <div class="fc-reward-cashion">10,00</div> 	 </div> </div> </div> </div> <div class="bingo_dropdown"> <input name="dropdown" type="button" class="dropdown" value="Wie funktioniert das?" id="dropdown" onclick="dropdown()" /> </div> <div class="FindCode"> <h2 class="new-heading">Finde den Code und überprüfe deinen Preis!</h2> <div class="InputField"><input type="text" id="coupon-code" name="coupon_code" class="CodeInput" value="Füge den Code ein" placeholder="Füge den Code ein"onfocus="(this.value = '')" autocomplete="off" /></div> <div><button id="verify-code" style="width:100%;"><div class="CodeBtn">Kontrolliere den Code </div></button><br /><br /> <p id="response-text"></p> </div> </div> <div class="FindCode"> <div class="CodeHint">Tipp, um den Code zu finden:</div> <p>Hier kannst du einen neuen Code von Freitag bis Sonntag finden</p> </div> <h2 class="new-heading">Die letzten 25 Gewinner</h2> <div class="shop_table"> 	<div class="latestwinner_heading"> 		<span class="win_date"> Datum</span> 		<span class="winner_name"> Mitglied</span> 		<span class="winn_claimed"> Beantragt</span> 	</div> 	</div> </div> <script> $(document).ready(function () { $("#dout").hide(); }); jQuery('#dropdown').live('click', function (event) { jQuery('#dout').toggle('show'); }); $(function () { 	var isRequested = false; 	var responseText = $('#response-text'); 	$('#coupon-code').on('keypress', function (e) { 		if (e.keyCode == 13) 			verifyCoupon(e); 	}); 	$('#verify-code').click(function (e) { 		verifyCoupon(e); 	}); 	function verifyCoupon(e) { 		e.preventDefault(); 		var couponCode = $('#coupon-code').val().trim(); 		if (couponCode == '') { 			responseText.clearQueue().stop().text('Füge deinen Code ein').fadeIn(300).delay(3000).fadeOut(100, function () { 				responseText.text(''); 			}); 			return; 		} 		if (!isRequested) { 			isRequested = true; 			$.ajax({ 				url: '../ajax/verify_coupon_code.php', 				data: 'coupon_code=' + couponCode, 				type: 'POST', 				beforeSend: function () { 					responseText.text('Bitte warten ...').show(); 				}, 				complete: function () { 					isRequested = false; 				}, 				success: function (response) { 					responseText.hide(); 					if (response === null) { 						$('#redeem_response').html('API Error!'); 						responseText.text('API Error!').show(); 					} else{ 						$('#redeem_response').html(response.message); 						responseText.text(response.message).show(); 					} 				} 			}); 		} 	} }); </script> <div class="footerbanner "> &nbsp; <a class="various" href="#inline_store_visit" onclick="loginFancyPopUP({cashback: '25,00 ', storeName: 'Verivox', urlKey: 'verivox', imgUrl: 'https://static.orangebuddies.nl/image/stores/34193.jpg', itemId: '0', bannerId: '36031', isCbkDay: '1'})"> <img src="https://static.orangebuddies.nl/image/banners/36031-Normal.jpg" alt="Verivox"> </a> </div> </div> <!-- End Content --> </div> </div> <!-- End Main --> <div id="footer"> <div class="FooterDetail"> <div class="FooterQuickLink"> <div class="FooterMenu"> <ul class="grid effect-1" id="grid"> <li> <p>Angebote</p> <p class="FooterMenuLink"><a href="/shops/dailydeals-service.php" target="_self">Tagesangebote</a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=kortingscodes" target="_self">Rabattcodes </a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=new" target="_self">Neue Angebote</a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=tip" target="_self">Beliebte Angebote</a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=special" target="_self">Sonderangebote</a></p> <p class="FooterMenuLink"><a href="/static/manufacturer-cashback/" target="_self">Cashback-Aktionen der Hersteller</a></p> </li> <li> <p>Hilfreiche Webshop-Tipps</p> <p class="FooterMenuLink"><a href="/static/page.php?url_key=uitleg-shops" target="_self">Wie das Einkaufen mit Cashback funktioniert</a></p> <p class="FooterMenuLink"><a href="/static/page.php?url_key=uitleg-kortingscodes" target="_self">Rabattcodes und Cashback</a></p> <p class="FooterMenuLink"><a href="/shops/shops.php?url_key=all" target="_self">Suche nach Online-Shops </a></p> <p class="FooterMenuLink"><a href="/shops/shops.php?url_key=all" target="_self">Alle Online-Shops mit Cashback</a></p> <p class="FooterMenuLink"><a href="/static/earn-money.php" target="_self">Alle Wege, um Geld zu verdienen</a></p> <p class="FooterMenuLink"><a href="/comparison/" target="_self">Vergleich</a></p> <p class="FooterMenuLink"><a href="/static/page.php?url_key=uitleg-verdien-meer" target="_self">Sofort Verdienst</a></p> <p class="FooterMenuLink"><a href="/user/cashboost-new.php" target="_self">Cashboost</a></p> <p class="FooterMenuLink"><a href="/shops/win-competition.php" target="_self">Gewinnen</a></p> <p class="FooterMenuLink"><a href="/shops/shops.php" target="_self">Gratis Cashback</a></p> <p class="FooterMenuLink"><a href="/blog/" target="_self">Blog</a></p> </li> <li> <p>Hilfe</p> <p class="FooterMenuLink"><a href="/static/faq.php" target="_self">FAQ </a></p> <p class="FooterMenuLink"><a href="/user/generateticket.php" target="_self">Antrag für fehlende Transaktion stellen</a></p> <p class="FooterMenuLink"><a href="/static/contact.php" target="_self">Anfrage stellen </a></p> </li> <li> <p>Tools</p> <p class="FooterMenuLink"><a href="/static/mobile-app.php" target="_self">App installieren</a></p> <p class="FooterMenuLink"><a href="/static/toolbar.php" target="_self">Cashback-Melder downloaden </a></p> <p class="FooterMenuLink"><a href="/tech-check" target="_self">PC Check</a></p> </li> <li> <p>CashbackDeals.de</p> <p class="FooterMenuLink"><a href="/static/about-us/" target="_self">Über uns</a></p> <p class="FooterMenuLink"><a href="/static/affiliates/" target="_self">Affiliates</a></p> <p class="FooterMenuLink"><a href="/static/advertise/" target="_self">Werben</a></p> <p class="FooterMenuLink"><a href="/static/sitemap/" target="_self">Sitemap </a></p> </li> <li> <p>Allgemein</p> <p class="FooterMenuLink"><a href="/static/terms-and-conditions/" target="_self">AGB</a></p> <p class="FooterMenuLink"><a href="/static/cookies/" target="_self">Cookies</a></p> <p class="FooterMenuLink"><a href="/static/privacy" target="_self">Datenschutz</a></p> <p class="FooterMenuLink"><a href="/static/disclaimer/" target="_self">Disclaimer</a></p> <p class="FooterMenuLink"><a href="/static/impressum/" target="_self">Impressum</a></p> </li> </ul> <script src="/general.assets/js/masonry.pkgd.min.js"></script> <script src="/general.assets/js/imagesloaded.js"></script> <script src="/general.assets/js/classie.js"></script> <script src="/general.assets/js/AnimOnScroll.js"></script> <script> new AnimOnScroll(document.getElementById('grid'), { minDuration: 0.4, maxDuration: 0.7, viewportFactor: 0.2 }); </script> </div> </div> <div class="FollowUs"> <p class="FootHead">Folge uns:</p> <div class="SocialIcons"><a target="_blank" href="https://www.youtube.com/channel/UCiATlA546p52hrcltj3DIBQ"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/follow-us-youtube.gif" alt="Youtube" class="IconAdj"> Folge uns auf YouTube</a></div> <div class="SocialIcons"><a target="_blank" href="https://www.facebook.com/www.cashbackdeals.de/"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/follow-us-facebook.gif" alt="Facebook" class="IconAdj"> Like unsere Facebook-Seite</a></div> <div class="rating"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/star/rating_10.png" width="68" height="12" alt="StarRating" class="padRight20"> Bewertung: 5.00 - 1546 <a href="/testimonials/index.php">Empfehlungen</a> </div> <div class="OtherLogo"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/comodo.png" alt="Comodo secure"> </div> <div class="OtherLogo"> <a href="http://www.keurmerk.info/winkel_detail.php?winkel_id=3868&amp;hfst_id=123" target="_blank"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/LogoKeurmerk.png" alt="Webshop Keurmerk"> </a> </div> </div> </div> <div class="FootSection2"> <div class="OrangeLogo"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/OrangeBuddies-logo.png" alt="OrangeBuddies"></div> <div class="copyRight01"> <p>&copy; 2009-2018 orangebuddies.com | Powered by : <a href="http://www.orangebuddies.com" target="_blank">OrangeBuddies Media</a></p> <p>CashbackDeals.de ist eine von vielen Cashback-Webseiten von OrangeBuddies Media, einem Online-Medienunternehmen, das seit seiner Gründung im Jahre 2009 zu einem internationalen Unternehmen, mit Standorten in den Niederlanden, Deutschland, Spanien, Großbritannien und Kanada herangewachsen ist. Mit mehr als 100 Cashback-Webseiten in Europa, Australien und den Staaten. OrangeBuddies Media spezialisiert sich in Online-Cashback & Bonus-Portalen mit dem Ziel, Mehrwert für Verbraucher und Anzeigenkunden zu bieten.</p> </div> <div class="Celebrating"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/Years10.png" alt=""> <p>10-jähriges Jubiläum im Jahr 2018</p> </div> </div> </div> <div class="BottomBar" id="BottomBar"> <div class="crossBtn"><img onclick="closeDealBar('BottomBar')" style="cursor: pointer;" src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/crossBtn.png" alt="Close" width="26" height="26" /></div> <div class="BarCont"> <div class="ParentBar"> <div class="BarLogo"><img src="https://static.orangebuddies.nl/image/stores/7240.jpg" alt="RandomDeal" class="LogoRes" /></div> <div class="BarCash">bis zu 3,00% CashCoins</div> <div class="BarTxt">5% Rabatt für Neukunden bei zooplus</div> <div class="BarTxt2">Code:<strong>5PRDEAFF</strong></div> <div class="ShopNow"> <a class="various" href="#inline_store_visit" onclick="loginFancyPopUP({cashback: '3,00%', storeName: 'zooplus', urlKey: 'zooplus', imgUrl: 'https://static.orangebuddies.nl/image/stores/7240.jpg', isCbkDay: '1', itemId: '449352'})"> Zum Online-Shop </a> </div> </div> </div> </div> <!-- Takeover different banner code start --> <!-- Takeover different banner code end --> <div class="rightBanner main_banner"> <a class="various" href="#inline_store_visit" onclick="loginFancyPopUP({cashback: '4,00%', storeName: 'Under Armour', urlKey: 'under-armour-de', imgUrl: 'https://static.orangebuddies.nl/image/stores/85175.gif', itemId: '0', bannerId: '35626', isCbkDay: '0'})" title="Under Armour"><img class="main_sidebanner" width="120" height="400" src="https://static.orangebuddies.nl/image/banners/35626-SkyScraperWrapper.jpg" alt="Under Armour" /></a> <img src="" width="0" height="0" style="display:none"/> </div> </section> <!-- bodyWrapper section end --> <!-- PeanutLabs Alert Starts--> <script type="text/javascript" src="/general.assets/js/peanut/alert.js"></script> <script type="text/javascript"> function initAlert() { console.log('fire-peanutalert'); PeanutLabsAlert.initialize({ userId: document.getElementById('user_id').value, debugEnabled: true, // Have debug messages logged to the consolse. hideAfter: 15, // Makes the alert hide after 4 seconds. Can be left out, and will default to 10 seconds. iframeURL: 'https://www.cashbackdeals.de//onlinepanel-pl', // This URL needs to be changed to the url for the iframe. positionHorizontal: 'right', positionVertical: 'bottom', currencyName: 'Peanuts', server: 'https://api.peanutlabs.com', logoURL: 'https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16//assets/osn-icon.png', //'https://ii.peanutlabs.com/PL_Logo.png' alertTitle: 'Neue Umfragen stehen zur Verfügung!', alertMessage: 'Verdiene zusätzliche CashCoins!', alertClickHere: 'Klicke hier' }); } $(document).ready(function () { initAlert(); document.cookie = "peanutAlert=0;-1;path=/"; }); </script> <input id="user_id" type="text" value="92385-9261-c7c25349ba" class="form-control" style="display: none;" placeholder="User Id" readonly> <!-- PeanutLabs Alert Ends --> <script type="text/javascript"> //console.log('Lived'); function reportBrokenLink(urlKey) { var htm = '<a href="/report/' + urlKey + '.php" id="reported-link">report</a>'; jQuery('#genStoreLink').html(htm); loadPopup('.various', '680', '215','genStoreLink'); } function fulcrumSurveySent(user_id, survey_number, site_id){ $.ajax({ url: '/ajax/saveFulcrumSurveySent.php', data: 'user_id=' + user_id + '&survey_number=' + survey_number + '&site_id=' + site_id, type: 'POST', success: function (resp) { location.reload(); //console.log(resp); } }); } function addToFav(id, type, obj) { $.ajax({ url: '/ajax/addToFav.php', data: 'action=addToFav&id=' + id + '&type=' + type, type: 'POST', success: function (resp) { if(type=='outfit'){ if (resp == 1) { $("#" + obj + id).find('img').attr('src', 'https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/fav-full.png'); } else { $("#" + obj + id).find('img').attr('src', 'https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/fav-empty.png'); } }else{ if (resp == 1) { $("#" + obj + id).addClass('fav-icon-active'); } else { $("#" + obj + id).removeClass('fav-icon-active'); } } } }); } function updateWishList(id ,type,selection) { var action = ''; ////////////////////// classes used/////////////// var enableClsFav = 'fa-heart'; //enable fav class var disableClsFav = 'fa-heart-o'; //disable fav class var enableClsFavBell = 'fa-bell'; //enable mail subscribe class var disableClsFavBell = 'fa-bell-slash'; //disable mail subscribe class var favId = 'favStore'; var favNotifyId = 'favNotify'; var commonClsNotify = 'bellicon'; var commonClsHeart = 'hearticon'; var subAllFavId = 'subscribe_all_fav'; if (selection == 'all'){//only work for mail notify bell subscribe var favElementNotifyBell = $("." + commonClsNotify); } else{ var favElementHeart = $("#"+favId+ id);//add favourite element selection need to update var favElementNotifyBell = $("#"+favNotifyId+ id);//subscribe element selection need to update } if(type=='addRemoveFav'){//if user clicked on add fav heart icon if (favElementHeart.hasClass(enableClsFav)) {action = 'remove';} else {action = 'add';} } else if (type == 'updateAlerts'){//if user clicked on fav store mail bell icon notification if(selection=='all'){// if click enable all and disable all mail notifictaions if($("#"+subAllFavId).is(':checked')){action = '1'; } else{action = '0'; } } else{ if (favElementNotifyBell.hasClass(disableClsFavBell)) { action = '1'; } else if (favElementNotifyBell.hasClass(enableClsFavBell)) { action = '0'; } } } $.ajax({ url: '/ajax/update_user_whishlist.php', data: 'action='+action+'&id=' + id + '&type=' + type+'&selection='+selection, type: 'POST', dataType: "json", success: function (resp) { if(type=='addRemoveFav' && resp==1){ if(action=='add'){ favElementHeart.addClass(enableClsFav); favElementHeart.removeClass(disableClsFav); favElementNotifyBell.addClass(enableClsFavBell); favElementNotifyBell.removeClass(disableClsFavBell); }else{ favElementHeart.addClass(disableClsFav); favElementHeart.removeClass(enableClsFav); favElementNotifyBell.removeClass(enableClsFavBell); favElementNotifyBell.addClass(disableClsFavBell); } }else if(type == 'updateAlerts' && resp>0){ if(action=='1'){ favElementNotifyBell.addClass(enableClsFavBell); favElementNotifyBell.removeClass(disableClsFavBell); }else{ favElementNotifyBell.removeClass(enableClsFavBell); favElementNotifyBell.addClass(disableClsFavBell); } } $('#totalunsubs').html($('.'+enableClsFavBell).length); $('#totalsubs').html( $('.'+disableClsFavBell).length); } }); } function rewardCpcClick(key,pIdx) { if (typeof key !== "undefined") { $('#errorbox, #successbox').html('').hide(); var errMsg = ''; var succMsg = ''; $.ajax({ url: '/ajax/rewardCpcClick.php', data: 'url_key=' + key, type: 'POST', success: function (resp) { if (resp !== '') { if ($(resp).text() == 'reward_success') { succMsg = 'Dein Klick wurde erfolgreich registriert und deine Vergütung wurde deinem Konto gutgeschrieben.'; } else if ($(resp).text() == 'reward_failed') { errMsg = 'Dein Klick wurde nicht registriert.'; } else if ($(resp).text() == 'already_rewarded') { errMsg = 'Du hast dieses Angebot bereits angeklickt.'; } else if ($(resp).text() == 'store_zero_reward') { errMsg = 'Dieser Online-Shop vergibt zurzeit kein Cashback.'; } } else { errMsg = 'Keine Ergebnisse gefunden'; } }, async: false }); window.open('/visit/' + key + '.php?cm=1', "_blank");// cm=1 mean don't show the exit page; $('.cpc-' + pIdx).remove(); } else { errMsg = "Keine Ergebnisse gefunden"; } if (errMsg !== '') { $('#errorbox').html(errMsg); $('#errorbox').show(); } if (succMsg !== '') { $('#successbox').html(succMsg); $('#successbox').show(); } $('html,body').scrollTop(0); return false; } function adventSaveClick(myObj){ // console.log("here save click function"+myObj.saveClick); if(myObj.saveClick){ // console.log("Yes save click!"); $.ajax({ url: '/ajax/saveAdventClicks.php', data: 'eventid=' + myObj.eventid + '&adventid=' + myObj.adventid+ '&compid=' + myObj.compid, type: 'POST', success: function (resp) { if(resp!=""){ return resp; } // console.log('clicked saved'); } }); }else{ // console.log("Save No click!"); } } function adventCalenderPopup(myObj){ adventSaveClick(myObj); $('#click').attr('href', myObj.url); $('#click').attr('target','_blank'); $('#advent_imgurl').attr('src', myObj.imgUrl); $('#inline_adventCal').css('min-width','650px').css('min-height','550px'); loadPopup('.various', '650', '650','adventCalenderpopup'); } function showReasonField(isShow){ if(isShow == 0){ document.getElementById('otherMsgContainer').style.display = 'none'; }else{ document.getElementById('otherMsgContainer').style.display = 'block'; } } function regFancyPopUP(myObj) { var landingLink = '/popup/visit.php?url_key=' + myObj.urlKey; var show_goto_store_link = 0; var imageUrl = "/general.assets/images/bx_loader.gif"; if (myObj.channel && myObj.channel === "FBC") { landingLink += '&channel=FBC'; } else if (myObj.channel && myObj.channel === "TOB") { landingLink += '&channel=TOB'; } if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'dagdeal') landingLink += '&type=dagdeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'holidaydeal') landingLink += '&type=holidaydeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'dailydeal') landingLink += '&type=dailydeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'citydeal') landingLink += '&type=citydeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "product") landingLink = '/product/visit/' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "pfproduct") landingLink = '/pfproduct/visit/' + myObj.itemId; else if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0){ landingLink += '&type=voucher&typeId=' + myObj.itemId; } //Only for website banners if (typeof myObj.bannerId !== "undefined" && myObj.bannerId != 0) { if (myObj.channel && myObj.channel === "TOB") { landingLink += '&toBannerId='+myObj.bannerId; } else { landingLink += '&bannerId='+myObj.bannerId; } } //for blogs if (typeof myObj.blogId !== "undefined" && myObj.blogId != 0) { landingLink += '&blogId=' + myObj.blogId; } //End Only for website banners if (typeof myObj.themeId !== "undefined" && myObj.themeId != 0) landingLink += '&themeId='+myObj.themeId; if (typeof myObj.itemType !== "undefined" && myObj.itemType == "product") { var storeDetailLink = '/product/' + myObj.urlKey + '.php'; } else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "pfproduct") { var storeDetailLink = 'pfproduct/' + myObj.urlKey + '.php'; } else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "voucher" && typeof myObj.voucher_url_key !== "undefined") { var storeDetailLink = '/kortingsactie/'+ myObj.urlKey +'/'+ myObj.voucher_url_key; } else { var storeDetailLink = '/cashback/' + myObj.urlKey + '.php'; } if(typeof myObj.isCbkDay != 'undefined' && myObj.isCbkDay == 1){ var htm = login$('#title_popup_cbk_day').val().replace('//1', myObj.cashback).replace('//2', myObj.storeName); } else{ var htm = $('#title_popup').val().replace('//1', myObj.cashback).replace('//2', myObj.storeName); } var visitHtml = '<a style="margin-left: 2px;" class="button" href="' + landingLink + '" target="_blank" onClick="closePopup()"><span>' + 'Nein, ohne Cashback weiter zum Shop' + '</span></a>'; var newVisitHtml = '<a href="' + landingLink + '" target="_blank" onClick="closePopup()">Nein, ohne Cashback weiter zum Shop' + '</a>'; var currurl = window.location.pathname; var index = currurl.lastIndexOf("/") + 1; var filename = currurl.substr(index); var backStoreHtml = '<br/><br/><br/><p><a href="' + storeDetailLink + '" > Zurück CashbackDeals.de</a></p>'; $('.backlink').html(visitHtml + backStoreHtml); $('.popup-back-right').html('<img src="'+imageUrl+'" width="16" height="16" alt="-----" title="" />'); if (typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9'){ $('.popup-back-left').html(''); $('.popup-back-right').html(''); } else{ $('.popup-back-left').html('<a href="' + storeDetailLink + '" > Zurück CashbackDeals.de</a>'); $.ajax({ url: '/ajax/get_store_checks.php', data: 'url_key=' + myObj.urlKey , type: 'POST', success: function (resp) { var data = JSON.parse(resp); show_goto_store_link = data.show_goto_store_link ; // console.log('show_goto_store_link:'+show_goto_store_link); if(show_goto_store_link=='1'){ // console.log('yes show_goto_store_link'); $('.popup-back-right').html(newVisitHtml); } else if (typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9'){ $('.popup-back-right').html(''); } else{ // console.log('not how show_goto_store_link'); $('.popup-back-right').html(''); } } }); } // if(show_goto_store_link=='1'){ //$('.popup-back-right').html(newVisitHtml); // } ///////////Start hide Show Go to Store Link code show_goto_store_link //////////// ///////////End hide Show Go to Store Link code show_goto_store_link //////////// $('#reg_main_title').html(htm); if (filename == 'dailydeals-service.php') $('.ReturnUrl').val(landingLink); else $('.ReturnUrl').val(storeDetailLink); visitHtml + backStoreHtml loadPopup('.various', '900', '664'); } function loginFancyPopUP(myObj) { hideNewDeals(); if (myObj.itemType == 'product') { $('#store_cashback_range').html(myObj.cashback); $('.shop-detail-rating').css('display', 'none'); $('#extra_conditions').css('display', 'none'); if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0) var landingLink = '/product/visit/' + myObj.itemId; $('a#store_visit_link').attr('href', landingLink); $('#store_detail_link').attr('href', '/product/' + myObj.urlKey+'.php'); } else if (myObj.itemType == 'pfproduct') { $('#store_cashback_range').html(myObj.cashback); $('.shop-detail-rating').css('display', 'none'); $('#extra_conditions').css('display', 'none'); if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0) var landingLink = '/pfproduct/visit/' + myObj.itemId; $('a#store_visit_link').attr('href', landingLink); $('#store_detail_link').attr('href', '/pfproduct/' + myObj.urlKey+'.php'); } else { var storeDetailLink = null; if (myObj.itemType == 'voucher' && typeof myObj.voucher_url_key !== 'undefined') { storeDetailLink = '/kortingsactie/'+ myObj.urlKey +'/'+ myObj.voucher_url_key; } else { storeDetailLink = '/cashback/'+myObj.urlKey+'.php'; } var landingLink = '/popup/visit.php?url_key='+myObj.urlKey; if(typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9' ){ // alert('hello'); landingLink += '&cultureid='+myObj.cultureid; var pasUrl = "url_key=" + myObj.urlKey + "&cultureid=" + myObj.cultureid; } else{ var pasUrl = "url_key=" + myObj.urlKey; } if (myObj.channel && myObj.channel === "FBC") { landingLink += '&channel=FBC'; } else if (myObj.channel && myObj.channel === "TOB") { landingLink += '&channel=TOB'; } if (typeof myObj.itemType !== "undefined" && (myObj.itemType == 'dailydeal' || myObj.itemType == 'dagdeal' || myObj.itemType == 'holidaydeal')) { landingLink += '&type='+myObj.itemType+'&typeId='+myObj.itemId; } else if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0) { landingLink += '&type=voucher&typeId='+myObj.itemId; } //Only for website banners if (typeof myObj.bannerId !== "undefined" && myObj.bannerId != 0) { if (myObj.channel && myObj.channel === "TOB") { landingLink += '&toBannerId='+myObj.bannerId; } else { landingLink += '&bannerId='+myObj.bannerId; } } //for blogs if (typeof myObj.blogId !== "undefined" && myObj.blogId != 0) { landingLink += '&blogId=' + myObj.blogId; } //End Only for website banners if (typeof myObj.themeId !== "undefined" && myObj.themeId != 0) landingLink += '&themeId='+myObj.themeId; $('#storeVoucherBox').hide(); // hide any previously shown voucher code box if (typeof myObj.itemId !== "undefined" && typeof myObj.code !== "undefined" && myObj.code != '') { $('#storeVoucherCode').html(myObj.code); $('#storeVoucherBox').show(); } $.ajax({ url: '/ajax/get_store_detail.php', data: pasUrl, type: 'POST', success: function (resp) { var obj = JSON.parse(resp); var min = obj.cashback_range.min; var max = obj.cashback_range.max; if (min != null) { if (37 == '77' || 37 == '91' || 37 == '133' || 37 == '132') { min = parseFloat(min).toFixed(2); max = parseFloat(max).toFixed(2); } else { min = parseFloat(min).toFixed(2).replace('.', ','); max = parseFloat(max).toFixed(2).replace('.', ','); } } $('#dealsNew').empty(); if(typeof(obj.deals) !="udefined" && obj.deals != null){ var lbl_popup_deal_select = "Auswählen"; obj.deals.forEach(function(item){ $('#dealsNew').append('<div class="popup-row"> <div class="popup-deal-logo"> <img src="'+item.voucher_image+'"></div> <div class="popup-deal-store">'+item.name+'</div> <div class="popup-deal-save">'+item.txt_cashback+'</div> <div class="popup-deal-btn"><a href="/cashback/'+item.url_key+'.php">'+lbl_popup_deal_select+'</a></div></div>'); }); } if (typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9'){ var type = obj.cashback_range.cashback_type; if (type == 'percent') type = "%"; else if (type == 'points') type = 'Punkt(e)'; else type = ''; var cashback = obj.cashback_range.cashback; if (37 == '77' || 37 == '91' || 37 == '133' || 37 == '132') { cashback = parseFloat(cashback).toFixed(2); } else { cashback = parseFloat(cashback).toFixed(2).replace('.', ','); } // alert(type); //alert(cashback + type); $('#store_cashback_range').html(cashback + type); } else{ var type = obj.cashback_range.type; if (type == 'percent') type = "%"; else if (type == 'points') type = 'Punkt(e)'; else type = ''; if (min == null) $('#store_cashback_range').html('0,00'); else if (min == max) $('#store_cashback_range').html(min + type); else $('#store_cashback_range').html(min + ' - ' + max + type + ' <a href="' + storeDetailLink + '" class="info_store_deals"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/info_icon.png" width="30" height="30" style="vertical-align:top;" border="0" alt="" /></a>'); } var rating_imgurl = $('#popup_rating_imgurl').val(); $('#popup_rating_img').attr('src', rating_imgurl + obj.store_reviews.rating + '.png'); $('#popup_total_reviews').html(obj.store_reviews.total_reviews); var extra_info = obj.store_info.cashback_tc; var lbl_extra_conditions_info = 'Ja, <a href="//1" onclick="closeFB()">klicke hier</a>'; if (extra_info == false) $('#extra_conditions').html('Nein'); else $('#extra_conditions').html(lbl_extra_conditions_info.replace('//1', storeDetailLink + '#additional_conditions')) } }); $('a#store_visit_link').attr('href', landingLink); if(typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9' ){ $('#store_detail_link').hide(); } else{ $('#store_detail_link').show(); $('#store_detail_link').attr('href', storeDetailLink); } } // already visited store script var vistedKeys = []; vistedKeys.push("saturn-handytarife-de"); vistedKeys.push("aboalarm-de"); vistedKeys.push("urlaub-de"); if((jQuery.inArray( myObj.urlKey,vistedKeys) >= 0 || jQuery.inArray( myObj.urlKey,keyGlobal) >= 0)){ var store_short_desc = '<i class="fa fa-check-circle"></i>Wir haben deinen Besuch bei %STORENAME% registriert.'; }else{ var store_short_desc = 'Deine Bestellung bei //store_name wird nun registriert'; } $('#store_visit_link').attr('onclick','setPopupTitle("'+myObj.storeName+'","'+myObj.urlKey+'");'); // already visited store script end $('.heading').html(store_short_desc.replace("//store_name", '<span>' + myObj.storeName + '</span>').replace("%STORENAME%", '<span>' + myObj.storeName + '</span>')); $('.alert-msg').html($('#store_full_desc').val().replace("//store_name", myObj.storeName)); var lbl_visit_store_btn = "Zu //1"; $('#store_visit_text').html(lbl_visit_store_btn.replace("//1", myObj.storeName)); $('#store_imgurl').attr('src', myObj.imgUrl); checkPCSettings(); loadPopup('.various', '900', '664'); } function showNewDeals(){ $('.popup-deals').show(); $('.popup-info').hide(); $('.popup-advice').hide(); $('.alert-msg').hide(); $('#storeVoucherBox').hide(); $('.popup-button').hide(); $('.popup-back').hide(); } function hideNewDeals(){ $('#dealsNew').empty(); $('.popup-deals').hide(); $('.popup-info').show(); $('.popup-advice').show(); $('.alert-msg').show(); $('#storeVoucherBox').show(); $('.popup-button').show(); $('.popup-back').show();


<li>
  <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out">
	Sign out
  </a>
</li>
</ul>
</div>
</footer>

<script crossorigin="anonymous" async="async" integrity="sha512-+izPSyHTdT2AVPhc67yV3qmann6eeN29nDDv2mavIpa51L/ydhqycmLaPyd7u97KBPc414KLsvTOstyxl0mIBQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/mobile-57884b97504ac6738f973dae94e0509e.js"></script>

</body>
</html>#ff0000const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const plugins = [];
let outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = 'stackedit.min.js';
} else {
  outputFile = 'stackedit.js';
}

const config = {
  entry: path.join(__dirname, '/src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/docs/lib'),
    filename: outputFile,
    library: 'Stackedit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
  plugins,
};

<!DOCTYPE html>
<html lang="en">
  <head>
	<meta charset="utf-8">
	<!--   <link rel="dns-prefetch" href="https://assets-cdn.github.com"> -->
	<link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
	<link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
	<link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
	<link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
	<link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
	<link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



	<meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
	<meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)">
	<meta name="selected-link" value="repo_issues">


	<meta name="octolytics-dimension-device" content="mobile" />
	<meta name="octolytics-dimension-user_id" content="16785467" /><meta name="octolytics-dimension-user_login" content="googleapis" /><meta name="octolytics-dimension-repository_id" content="8608480" /><meta name="octolytics-dimension-repository_nwo" content="googleapis/google-api-nodejs-client" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="8608480" /><meta name="octolytics-dimension-repository_network_root_nwo" content="googleapis/google-api-nodejs-client" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


	<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="B486:6986:63C8315:AA3A300:5BEC508B" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="44534247" /><meta name="octolytics-actor-login" content="shoppingandmore2017" /><meta name="octolytics-actor-hash" content="948e001abef82015cab147c637c2b3938aeddd7ef6fb9939cf359a0839a4eb3a" />
	<meta name="analytics-location-query-strip" content="true" data-pjax-transient="true" /><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/issues/show" data-pjax-transient="true" />



	<meta name="google-analytics" content="UA-3769691-2">

	<meta class="js-ga-set" name="userId" content="57e4592c4ecc74d50ee1881f64ad235a" %>

	<meta class="js-ga-set" name="dimension1" content="Logged In">

	<meta class="js-ga-set" name="dimension3" content="mobile">




	<title>Poor Typings for Schema$InstanceAggregatedList · Issue #1383 · googleapis/google-api-nodejs-client</title>

	<link crossorigin="anonymous" media="all" integrity="sha512-EFgogc52p9/QCRL0nZxOKFBPdljXOVIbScULSey295+vAGl3Vq9aZBCMYENgl9aLCq38K32Lc+cMokoeBu44/Q==" rel="stylesheet" href="https://assets-cdn.github.com/assets/mobile-ab499526ae3a85155b1900835f51dd15.css" />


	<meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

	<meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

	<link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
	<link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

	<meta name="theme-color" content="#1e2327">



	<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="page-responsive">



	<header class="Header f5 lh-default clearfix">
	  <div class="p-responsive flex-justify-between">
		<div class="d-flex flex-justify-between flex-items-center position-absolute right-0 left-0 px-3 mt-1">
		  <div class="d-flex mx-2"><!-- placeholder for hamburger --></div>
		  <div class="px-3 overflow-hidden">
			<div class="css-truncate css-truncate-target width-fit">
			  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
			  <strong>
				<a class="text-white" href="/googleapis">googleapis</a>
			  </strong> /
			  <strong>
				<a class="text-white" href="/googleapis/google-api-nodejs-client">google-api-nodejs-client</a>
			  </strong>
			</div>

		  </div>

		  <div class="d-flex">
			<a href="/googleapis/google-api-nodejs-client/issues/new" class="header-button header-context-button">
			  <svg height="22" class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg>
			</a>


			<a class="position-relative notification-indicator ml-3" href="/notifications"
			   aria-label="You have unread notifications"
			   data-ga-click="Mobile, tap, location:header; text:Notifications">
			  <span class="mail-status unread"></span>
			  <svg height="16" class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M13.99 11.991v1H0v-1l.73-.58c.769-.769.809-2.547 1.189-4.416.77-3.767 4.077-4.996 4.077-4.996 0-.55.45-1 .999-1 .55 0 1 .45 1 1 0 0 3.387 1.229 4.156 4.996.38 1.879.42 3.657 1.19 4.417l.659.58h-.01zM6.995 15.99c1.11 0 1.999-.89 1.999-1.999H4.996c0 1.11.89 1.999 1.999 1.999z"/></svg>
			</a>
		  </div>
		</div>


		<details class="details-reset">
		  <summary class="mt-1 float-left position-relative user-select-none" data-ga-click="Mobile, tap, location:header; text:Hamburger">
			<svg height="24" class="octicon octicon-three-bars notification-indicator" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
		  </summary>
		  <div style="clear: both;">
			<div class="py-3">
			  <div class="header-search scoped-search site-scoped-search js-site-search position-relative "
				   role="search"
				   >
				<div class="position-relative">
				  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="8608480" data-scoped-search-url="/googleapis/google-api-nodejs-client/search" data-unscoped-search-url="/search" action="/googleapis/google-api-nodejs-client/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
			  <label class="form-control header-search-wrapper  js-chromeless-input-container">
				<a class="header-search-scope no-underline" href="/googleapis/google-api-nodejs-client/issues/1383">This repository</a>
				<input type="text"
					   class="form-control header-search-input  js-site-search-focus js-site-search-field is-clearable"
					   data-hotkey="s,/"
					   name="q"
					   value=""
					   placeholder="Search"
					   data-unscoped-placeholder="Search GitHub"
					   data-scoped-placeholder="Search"
					   autocapitalize="off"
					   aria-label="Search this repository"
					   >
				<input type="hidden" class="js-site-search-type-field" name="type" >
			  </label>
			  </form>  </div>
		  </div>

		  </div>
		<ul class="text-bold list-style-none p-0 m-0">
		  <li>
			<a href="/" data-ga-click="Mobile, tap, location:header; text:Dashboard" class="js-selected-navigation-item HeaderNavlink py-2 mt-3">
			  Dashboard
			</a>
		  </li>
		  <li>
			<a class="js-selected-navigation-item HeaderNavlink py-2" href="/pulls">
			  Pull requests
			</a>            </\u006c\u0069>
		<li>
		  <a class="js-selected-navigation-item HeaderNavlink py-2" href="/issues">
			Issues
		  </a>            </li>
		<li>
		  <a class="js-selected-navigation-item HeaderNavlink py-2" data-ga-click="Mobile, tap, location:header; text:Marketplace" href="/marketplace">
			Marketplace
		  </a>              </li>
		<li>
		  <a href="/explore" data-ga-click="Mobile, tap, location:header; text:Explore" class="js-selected-navigation-item HeaderNavlink py-2">
			Explore
		  </a>
		</li>
		<li>
		  <a href="/shoppingandmore2017" data-ga-click="Mobile, tap, location:header; text:User avatar" class="js-selected-navigation-item HeaderNavlink py-2">
			<img class="avatar" src="https://avatars3.githubusercontent.com/u/44534247?s=40&amp;v=4" width="20" height="20" alt="@shoppingandmore2017" />
			shoppingandmore2017
		  </a>
		</li>
		<li>
		  <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out" class="HeaderNavlink py-2" style="padding-left: 2px;">
			<svg style="margin-right: 2px;" class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.995h-1v3.997z"/></svg>
			Sign out
		  </a>
		</li>
		</ul>
	  </div>

	</details>
  </div>
</header>


<div class="flash flash-full js-notice flash-error">
  <div class="container">










	<h4>Your account has been flagged.</h4>
	Because of that, your profile is hidden from the public. If you believe this is a mistake, <a href="/contact">contact support</a> to have your account status reviewed.









  </div>
</div>








<div class="reponav-wrapper lh-default">
  <nav class="reponav js-reponav"
	   itemscope
	   itemtype="http://schema.org/BreadcrumbList">

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a class="js-selected-navigation-item reponav-item" itemprop="url" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /googleapis/google-api-nodejs-client" href="/googleapis/google-api-nodejs-client">
		<span itemprop="name">Code</span>
		<meta itemprop="position" content="1">
	  </a>    </span>

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a itemprop="url" class="js-selected-navigation-item selected reponav-item" aria-current="page" data-selected-links="repo_issues repo_labels repo_milestones /googleapis/google-api-nodejs-client/issues" href="/googleapis/google-api-nodejs-client/issues">
		<span itemprop="name">Issues</span>
		<span class="Counter">67</span>
		<meta itemprop="position" content="2">
	  </a>      </span>

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /googleapis/google-api-nodejs-client/pulls" href="/googleapis/google-api-nodejs-client/pulls">
		<span itemprop="name">Pull requests</span>
		<span class="Counter">2</span>
		<meta itemprop="position" content="3">
	  </a>    </span>

	<span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
	  <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links=" /googleapis/google-api-nodejs-client/projects" href="/googleapis/google-api-nodejs-client/projects">
		<span itemprop="name">Projects</span>
		<span class="Counter">0</span>
		<meta itemprop="position" content="4">
	  </a>      </span>


	<a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /googleapis/google-api-nodejs-client/pulse" href="/googleapis/google-api-nodejs-client/pulse">
	  Pulse
	</a>
  </nav>
</div>

<div id="js-flash-container">


</div>




<div class="js-comment">
  <div class="discussion-header">
	<div class="clearfix">
	  <a href="#bottom" class="float-right py-1 js-scroll">Jump to bottom</a>

	  <span class="State State--red float-left">
		<svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
		Closed
	  </span>
	</div>

	<h1 class="discussion-title">
	  Poor Typings for Schema$InstanceAggregatedList
	  <span class="text-gray text-normal">#1383</span>
	</h1>
	<div class="hide-when-editing">
	  <div class="d-flex flex-row discussion-block-title">
		<div class="flex-auto">
		  <img class="avatar" src="https://avatars0.githubusercontent.com/u/38667046?s=64&amp;v=4" width="32" height="32" alt="@david-cannady" />

		  <div class="discussion-block-meta">
			<strong><a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=38667046" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/david-cannady">david-cannady</a></strong>

			opened this issue
			<br>
			about 1 month ago
			<br>
		  </div>
		</div>

	  </div>
	</div>
  </div>

  <span class="labels discussion-labels">
	<svg class="octicon octicon-tag" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>
	<a href="/googleapis/google-api-nodejs-client/labels/TypeScript" class="IssueLabel d-inline-block"
	   style="background-color: #264199; color: #ffffff;">
	  TypeScript
	</a>
	<a href="/googleapis/google-api-nodejs-client/labels/priority%3A%20p2" class="IssueLabel d-inline-block"
	   style="background-color: #fef2c0; color: #000000;">
	  priority: p2
	</a>
	<a href="/googleapis/google-api-nodejs-client/labels/type%3A%20bug" class="IssueLabel d-inline-block"
	   style="background-color: #db4437; color: #000000;">
	  type: bug
	</a>
  </span>



  <div class="discussion-starting-comment">
	<div class="discussion-comment markdown-body hide-when-editing">
	  <h4>Environment details</h4>
	  <ul>
		<li>OS: N/A</li>
		<li>Node.js version: N/A</li>
		<li>npm version: N/A</li>
		<li><code>googleapis</code> version: "34.0.0"</li>
	  </ul>
	  <h4>Steps to reproduce</h4>
	  <p>None.<br>
		Schema$InstanceAggregatedList.items is defined as <code>?: any</code>.<br>
		This should be something like <code>?: { [key: string]?: Schema$InstancesScopedList }</code>.<br>
		The same is true for Schema$*.warning. It would be better to have those properly defined.</p>

	  <div class="comment-reactions hide-when-editing  js-reactions-container">
		<div class="comment-reactions-options ">

		  <div class="border-gray-dark js-reactions-options">
			<div class="d-flex flex-justify-start flex-wrap">


			  <details class="details-reset details-overlay details-overlay-dark my-1">
				<summary class="btn-link muted-link height-full d-block py-1 px-2 mr-2 border rounded-1 f6 border-gray-dark">
				  <svg class="octicon octicon-plus-small" viewBox="0 0 7 16" version="1.1" width="7" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z"/></svg>
				  <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
				</summary>

				<div class="details-dialog Box Box--overlay anim-fade-in fast lh-default rounded-1" role="dialog">
				  <div class="d-flex flex-row border-bottom">
					<div class="col-4">
					  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="e+8ulBr9dROjamXcDPlnqF/1M/RhYNfKfDMLfLExNpy0Z5PPYaEwdeYxsDgb9RmXe9ZYJ+459LeP7vQaZflkjQ==" />

				  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
				  <input type="hidden" name="mobile" value="yes">
				  <input type="hidden" name="input[content]" value="THUMBS_UP react">

				  <button type="submit"
						  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
						  aria-label="React with thumbs up emoji">
					<g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji">👍</g-emoji>
					<span class="f6 d-block mt-2 text-gray">+1</span>
				  </button>
				  </form>          </div>
				<div class="col-4">
				  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="esj23puRVOsYYzUzAcq8NM397cFTRUMuwWUN0tx4Xtm1QEuF4M0RjV044NcWxsIL6d6GEtwcYFMyuPK0CLAMyA==" />

			  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
			  <input type="hidden" name="mobile" value="yes">
			  <input type="hidden" name="input[content]" value="THUMBS_DOWN react">

			  <button type="submit"
					  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
					  aria-label="React with thumbs down emoji">
				<g-emoji alias="-1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png" class="emoji">👎</g-emoji>
				<span class="f6 d-block mt-2 text-gray">-1</span>
			  </button>
			  </form>          </div>008h3
			<div class="col-4">
			  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="iDi3FRo6t9kMcZ4bHcuVdX97qwFo8I+IJrIaHR0+m6BHsApOYWbyv0kqS/8Kx+tKW1jA0ueprPXVb+V7yfbJsQ==" />

		  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
		  <input type="hidden" name="mobile" value="yes">
		  <input type="hidden" name="input[content]" value="LAUGH react">

		  <button type="submit"
				  class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
				  aria-label="React with laugh emoji">
			<g-emoji alias="smile" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png" class="emoji">😄</g-emoji>
			<span class="f6 d-block mt-2 text-gray">Laugh</span>
		  </button>
		  </form>          </div>
	  </div>
	  <div class="d-flex flex-row ">
		<div class="col-4">
		  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Bs7PY2+i+BmdvfFjkZBZIToPxR8+b8gQka+bOqzz7DXJRnI4FP69f9jmJIeGnCceHiyuzLE2621icmRceDu+JA==" />

	  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
	  <input type="hidden" name="mobile" value="yes">
	  <input type="hidden" name="input[content]" value="HOORAY react">

	  <button type="submit"
			  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
			  aria-label="React with hooray emoji">
		<g-emoji alias="tada" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png" class="emoji">🎉</g-emoji>
		<span class="f6 d-block mt-2 text-gray">Hooray</span>
	  </button>
	  </form>          </div>
	<div class="col-4">
	  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Zv2AYEaaOZuAfB1C2N45Jnj/CNUG1FUFyVuujDKzYROpdT07PcZ8/cUnyKbP0kcZXNxjBomNdng6hlHq5nszAg==" />

  <input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
  <input type="hidden" name="mobile" value="yes">
  <input type="hidden" name="input[content]" value="CONFUSED react">

  <button type="submit"
		  class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
		  aria-label="React with confused emoji">
	<g-emoji alias="thinking_face" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png" class="emoji">😕</g-emoji>
	<span class="f6 d-block mt-2 text-gray">Confused</span>
  </button>
  </form>          </div>
<div class="col-4">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="UuYDMW3sMDPiA8/EUTPnnNv3vAizpyHSRGuzhUtzDfGdbr5qFrB1VadYGiBGP5mj/9TX2zz+Aq+3tkzjn7tf4A==" />

<input type="hidden" name="input[subjectId]" value="MDU6SXNzdWUzNjgzOTgyMDY=">
<input type="hidden" name="mobile" value="yes">
<input type="hidden" name="input[content]" value="HEART react">

<button type="submit"
		class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
		aria-label="React with heart emoji">
  <g-emoji alias="heart" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" class="emoji">❤️</g-emoji>
  <span class="f6 d-block mt-2 text-gray">Heart</span>
</button>
</form>          </div>
</div>
</div>
</details>

</div>
</div>

</div>
</div>

</div>

</div>
</div>





<div class="discussion-event issue-event

			"
	 id="event-1895460106">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/triage%20me" class="IssueLabel d-inline-block" style="background-color: #FF69B4; color: #000000;">
	triage me
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895460106" class="timestamp"><time datetime="2018-10-10 15:09:26 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895942289">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/type%3A%20bug" class="IssueLabel d-inline-block" style="background-color: #db4437; color: #000000;">
	type: bug
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895942289" class="timestamp"><time datetime="2018-10-10 17:55:31 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895942295">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/priority%3A%20p2" class="IssueLabel d-inline-block" style="background-color: #fef2c0; color: #000000;">
	priority: p2
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895942295" class="timestamp"><time datetime="2018-10-10 17:55:31 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895942303">

  <strong>
	JustinBeckwith
  </strong>

  added the
  <a href="/googleapis/google-api-nodejs-client/labels/TypeScript" class="IssueLabel d-inline-block" style="background-color: #264199; color: #ffffff;">
	TypeScript
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895942303" class="timestamp"><time datetime="2018-10-10 17:55:31 +0200">about 1 month ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1895947746">

  <strong>
	JustinBeckwith
  </strong>

  removed the
  <a href="/googleapis/google-api-nodejs-client/labels/triage%20me" class="IssueLabel d-inline-block" style="background-color: #FF69B4; color: #000000;">
	triage me
  </a>
  label
  <svg class="octicon octicon-tag issue-event-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.685 1.72a2.49 2.49 0 0 0-1.76-.726H3.48A2.5 2.5 0 0 0 .994 3.48v2.456c0 .656.269 1.292.726 1.76l6.024 6.024a.99.99 0 0 0 1.402 0l4.563-4.563a.99.99 0 0 0 0-1.402L7.685 1.72zM2.366 7.048a1.54 1.54 0 0 1-.467-1.123V3.48c0-.874.716-1.58 1.58-1.58h2.456c.418 0 .825.159 1.123.467l6.104 6.094-4.702 4.702-6.094-6.114zm.626-4.066h1.989v1.989H2.982V2.982h.01z"/></svg>


  <a href="#event-1895947746" class="timestamp"><time datetime="2018-10-10 17:57:28 +0200">about 1 month ago</time></a>
</div>

<div class="discussion-block">
  <div class="bubble cross-reference">
	<div class="bubble-title ">

	  <a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=34161822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ajaaym">ajaaym</a>
	  <strong>referenced</strong> this issue from another pull request
	</div>

	<div class="bubble-content">
	  <strong>
		<a href="/googleapis/nodejs-googleapis-common/issues/34">
		  #34 Add additionalProperties to SchemaItem
		</a>        </strong>

	  in googleapis/nodejs-googleapis-common

	</div>
  </div>
</div>



<div class="discussion-event issue-event
			closed-event
			"
	 id="event-1935962005">

  <strong>
	JustinBeckwith
  </strong>

  closed this issue
  in <a href="/googleapis/nodejs-googleapis-common/issues/34">googleapis/nodejs-googleapis-common#34</a>
  <svg class="octicon octicon-circle-slash issue-event-icon issue-event-icon-closed" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z"/></svg>


  <a href="#event-1935962005" class="timestamp"><time datetime="2018-10-30 19:40:09 +0100">15 days ago</time></a>
</div>


<div class="discussion-block">
  <div class="bubble js-comment js-comment-container js-suggested-changes-container" id="issuecomment-434425331">

	<div class="js-minimizable-comment">
	  <div class="discussion-block-title">

		<img class="avatar" height="32" width="32" alt="@ajaaym" src="https://avatars1.githubusercontent.com/u/34161822?s=88&amp;v=4" />

		<div class="discussion-block-meta">
		  <a href="/ajaaym" class="username">
			ajaaym
		  </a>

		  <br>

		  commented

		  <a href="#issuecomment-434425331"><time class="timestamp" datetime="2018-10-30 18:51:00 UTC">15 days ago</time></a>


		</div>
	  </div>

	  <div class="bubble-content pb-2 ">
		<div class="markdown-body hide-when-editing f5 p-0" data-unfurl-authenticity-token="g7i+yUmzbWJQJUFHxyiTmgbrmNk1jCW6OksttsV8zTZZShRHf52P00jIUiKKUMR/+6mxATwtq31RxupJuh5n8g==">
		  <p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=534619" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/JustinBeckwith">@JustinBeckwith</a> Can you please reopen this issue again as there is another change required in generator after <a href="https://github.com/googleapis/nodejs-googleapis-common">googleapis-common</a> is released with <a href="https://github.com/googleapis/nodejs-googleapis-common/pull/34" data-hovercard-type="pull_request" data-hovercard-url="/googleapis/nodejs-googleapis-common/pull/34/hovercard">change</a></p>
		</div>




		<div class="comment-reactions hide-when-editing has-reactions js-reactions-container">
		  <div class="comment-reactions-options mt-2">

			<div class="border-gray-dark js-reactions-options">
			  <div class="d-flex flex-justify-start flex-wrap">

				<details class="details-reset details-overlay details-overlay-dark my-1">
				  <summary class="btn-link reaction-summary-item d-block py-1 px-2 mr-2 border rounded-1 f6 border-gray-dark ">
					<g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji mr-1">👍</g-emoji>
					1
				  </summary>

				  <div class="details-dialog Box Box--overlay rounded-1 anim-fade-in fast" role="dialog">
					<div class="p-3">
					  <span class="text-bold">JustinBeckwith</span> reacted with thumbs up emoji

					  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="mt-3 js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Y3Sobq0Z69W9deIgkuCWME7q+7tkPxixDy7kCs0OgDus/BU11kWus/guN8SF7OgPasmQaOtmO8z88xtsGcbSKg==" />
				  <input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
				  <input type="hidden" name="mobile" value="yes">
				  <input type="hidden" name="input[content]" value="THUMBS_UP react">

				  <button type="submit" class="btn btn-block">
					Add my <g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji ml-1">👍</g-emoji>
				  </button>
				  </form>    </div>
			  </div>
			  </details>



			<details class="details-reset details-overlay details-overlay-dark my-1">
			  <summary class="btn-link muted-link height-full d-block py-1 px-2 mr-2 border rounded-1 f6 border-gray-dark">
				<svg class="octicon octicon-plus-small" viewBox="0 0 7 16" version="1.1" width="7" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z"/></svg>
				<svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
			  </summary>

			  <div class="details-dialog Box Box--overlay anim-fade-in fast lh-default rounded-1" role="dialog">
				<div class="d-flex flex-row border-bottom">
				  <div class="col-4">
					<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="K7G65KIHVSDHZ4HrFAe5yzSGI1ZXCmHvQoGr0sdanQjkOQe/2VsQRoI8VA8DC8f0EKVIhdhTQpKxXFS0E5LPGQ==" />

				<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
				<input type="hidden" name="mobile" value="yes">
				<input type="hidden" name="input[content]" value="THUMBS_UP react">

				<button type="submit"
						class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
						aria-label="React with thumbs up emoji">
				  <g-emoji alias="+1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png" class="emoji">👍</g-emoji>
				  <span class="f6 d-block mt-2 text-gray">+1</span>
				</button>
				</form>          </div>
			  <div class="col-4">
				<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="sGmf0Noj8VdynHzp2iJvFEEOEhV6czzc0d++4qY11hh/4SKLoX+0MTfHqQ3NLhErZS15xvUqH6EiAkGEcv2ECQ==" />

			<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
			<input type="hidden" name="mobile" value="yes">
			<input type="hidden" name="input[content]" value="THUMBS_DOWN react">

			<button type="submit"
					class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
					aria-label="React with thumbs down emoji">
			  <g-emoji alias="-1" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png" class="emoji">👎</g-emoji>
			  <span class="f6 d-block mt-2 text-gray">-1</span>
			</button>
			</form>          </div>
		  <div class="col-4">
			<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="JlXnMochRTpP82ezXNcXP0CkfVWSxMzMYwosAABknyXp3Vpp/H0AXAqosldL22kAZIcWhh2d77GQ19Nm1KzNNA==" />

		<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
		<input type="hidden" name="mobile" value="yes">
		<input type="hidden" name="input[content]" value="LAUGH react">

		<button type="submit"
				class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
				aria-label="React with laugh emoji">
		  <g-emoji alias="smile" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f604.png" class="emoji">😄</g-emoji>
		  <span class="f6 d-block mt-2 text-gray">Laugh</span>
		</button>
		</form>          </div>
	</div>
	<div class="d-flex flex-row ">
	  <div class="col-4">
		<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="+CG4AFDK/bB4AT78j0X2BKTHjA3yiqJewzsEfszGBEQ3qQVbK5a41j1a6xiYSYg7gOTn3n3TgSMw5vsYGA5WVQ==" />

	<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
	<input type="hidden" name="mobile" value="yes">
	<input type="hidden" name="input[content]" value="HOORAY react">

	<button type="submit"
			class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
			aria-label="React with hooray emoji">
	  <g-emoji alias="tada" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f389.png" class="emoji">🎉</g-emoji>
	  <span class="f6 d-block mt-2 text-gray">Hooray</span>
	</button>
	</form>          </div>
  <div class="col-4">
	<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="oMOs2TeI1wtNK626M87oKUMgIFOXbOAykD7uwTzjqsVvSxGCTNSSbQhweF4kwpYWZwNLgBg1w09j4xGn6Cv41A==" />

<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
<input type="hidden" name="mobile" value="yes">
<input type="hidden" name="input[content]" value="CONFUSED react">

<button type="submit"
		class="width-full btn-text py-4 f0-light add-reactions-options-item  border-right js-reaction-option-item"
		aria-label="React with confused emoji">
  <g-emoji alias="thinking_face" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f615.png" class="emoji">😕</g-emoji>
  <span class="f6 d-block mt-2 text-gray">Confused</span>
</button>
</form>          </div>
<div class="col-4">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-pick-reaction" data-remote="true" action="/users/googleapis/reactions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="A8XRTusp5XZd1ilXBnwOYpK/lmkGeMYtrvrh0nA0MufMTWwVkHWgEBiN/LMRcHBdtpz9uokh5VBdJx60pPxg9g==" />

<input type="hidden" name="input[subjectId]" value="MDEyOklzc3VlQ29tbWVudDQzNDQyNTMzMQ==">
<input type="hidden" name="mobile" value="yes">
<input type="hidden" name="input[content]" value="HEART react">

<button type="submit"
		class="width-full btn-text py-4 f0-light add-reactions-options-item   js-reaction-option-item"
		aria-label="React with heart emoji">
  <g-emoji alias="heart" fallback-src="https://assets-cdn.github.com/images/icons/emoji/unicode/2764.png" class="emoji">❤️</g-emoji>
  <span class="f6 d-block mt-2 text-gray">Heart</span>
</button>
</form>          </div>
</div>
</div>
</details>

</div>
</div>

</div>
</div>

</div>
</div>
</div>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1936146918">

  <strong>
	JustinBeckwith
  </strong>

  reopened this issue
  <svg class="octicon octicon-primitive-dot issue-event-icon issue-event-icon-open" viewBox="0 0 8 16" version="1.1" width="8" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>


  <a href="#event-1936146918" class="timestamp"><time datetime="2018-10-30 20:58:10 +0100">15 days ago</time></a>
</div>

<div class="discussion-block">
  <div class="bubble cross-reference">
	<div class="bubble-title ">

	  <a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=34161822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ajaaym">ajaaym</a>
	  <strong>referenced</strong> this issue from another pull request
	</div>

	<div class="bubble-content">
	  <strong>
		<a href="/googleapis/nodejs-googleapis-common/issues/39">
		  #39 Release googleapis-common v0.4.0
		</a>        </strong>

	  in googleapis/nodejs-googleapis-common

	</div>
  </div>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1957793369">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/ajaaym/google-api-nodejs-client/commit/3491167ceefd3cd78ad036bda4b4c4ee1fcac141">3491167</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1957793369" class="timestamp"><time datetime="2018-11-09 21:34:01 +0100">5 days ago</time></a>
</div>

<div class="discussion-block">
  <div class="bubble cross-reference">
	<div class="bubble-title ">

	  <a class="username" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=34161822" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/ajaaym">ajaaym</a>
	  <strong>referenced</strong> this issue from another pull request
	</div>

	<div class="bubble-content">
	  <strong>
		<a href="/googleapis/google-api-nodejs-client/issues/1433">
		  #1433 Fix #1383 Poor Typings for Schema
		</a>        </strong>


	</div>
  </div>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1957801223">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/ajaaym/google-api-nodejs-client/commit/4fc391c7a7ae6ee39bf5671cd8126e472a3a4712">4fc391c</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1957801223" class="timestamp"><time datetime="2018-11-09 21:38:21 +0100">5 days ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1962962464">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/ajaaym/google-api-nodejs-client/commit/676429ff3f24d136b47392084c3c29d1d3616844">676429f</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1962962464" class="timestamp"><time datetime="2018-11-13 14:05:46 +0100">1 day ago</time></a>
</div>



<div class="discussion-event issue-event
			closed-event
			"
	 id="event-1966088188">

  <strong>
	ajaaym
  </strong>

  closed this issue
  in <a href="/googleapis/google-api-nodejs-client/issues/1433">#1433</a>
  <svg class="octicon octicon-circle-slash issue-event-icon issue-event-icon-closed" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47 0 3.14-2.56 5.7-5.7 5.7z"/></svg>


  <a href="#event-1966088188" class="timestamp"><time datetime="2018-11-14 15:57:18 +0100">about 2 hours ago</time></a>
</div>



<div class="discussion-event issue-event

			"
	 id="event-1966088390">

  <strong>
	ajaaym
  </strong>

  referenced this issue from commit <code><a href="/googleapis/google-api-nodejs-client/commit/fd9eb79544ab3187f50cdef675169f898992c73f">fd9eb79</a></code>
  <svg class="octicon octicon-bookmark issue-event-icon" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/></svg>


  <a href="#event-1966088390" class="timestamp"><time datetime="2018-11-14 15:57:22 +0100">about 2 hours ago</time></a>
</div>



<a name="bottom" id="bottom"></a>



<div class="discussion-block-header">
  Comment on issue
</div>
<div class="discussion-reply-container">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/googleapis/google-api-nodejs-client/issue_comments" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="tnHoVNMyfzV144TCnNJxH0aMCTI7C/61tMFWhL6f5nzVRs9kCaXwHMhkUzhQOAxb3aWpLV7sbRHFVQPyJIl29Q==" />
<div class="discussion-reply">
  <input type="hidden" name="issue" value="1383">
  <textarea class="form-control input-block js-comment-and-field" name="comment[body]" placeholder="Leave a comment" rows="5"></textarea>

  <div class="button-container">

	<button type="submit" class="btn btn-primary" data-disable-with="Commenting…">Comment</button>
  </div>
</div>
</form></div>


<div class="discussion-block-header">
  Notifications for this thread
</div>
<div id="thread-subscription-status" class="thread-subscription-status">
  <p class="thread-subscription-description">
	<svg height="32" class="octicon octicon-radio-tower" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M4.79 6.11c.25-.25.25-.67 0-.92-.32-.33-.48-.76-.48-1.19 0-.43.16-.86.48-1.19.25-.26.25-.67 0-.92a.613.613 0 0 0-.45-.19c-.16 0-.33.06-.45.19-.57.58-.85 1.35-.85 2.11 0 .76.29 1.53.85 2.11.25.25.66.25.9 0zM2.33.52a.651.651 0 0 0-.92 0C.48 1.48.01 2.74.01 3.99c0 1.26.47 2.52 1.4 3.48.25.26.66.26.91 0s.25-.68 0-.94c-.68-.7-1.02-1.62-1.02-2.54 0-.92.34-1.84 1.02-2.54a.66.66 0 0 0 .01-.93zm5.69 5.1A1.62 1.62 0 1 0 6.4 4c-.01.89.72 1.62 1.62 1.62zM14.59.53a.628.628 0 0 0-.91 0c-.25.26-.25.68 0 .94.68.7 1.02 1.62 1.02 2.54 0 .92-.34 1.83-1.02 2.54-.25.26-.25.68 0 .94a.651.651 0 0 0 .92 0c.93-.96 1.4-2.22 1.4-3.48A5.048 5.048 0 0 0 14.59.53zM8.02 6.92c-.41 0-.83-.1-1.2-.3l-3.15 8.37h1.49l.86-1h4l.84 1h1.49L9.21 6.62c-.38.2-.78.3-1.19.3zm-.01.48L9.02 11h-2l.99-3.6zm-1.99 5.59l1-1h2l1 1h-4zm5.19-11.1c-.25.25-.25.67 0 .92.32.33.48.76.48 1.19 0 .43-.16.86-.48 1.19-.25.26-.25.67 0 .92a.63.63 0 0 0 .9 0c.57-.58.85-1.35.85-2.11 0-.76-.28-1.53-.85-2.11a.634.634 0 0 0-.9 0z"/></svg>
	You’re receiving notifications because you’re watching this repository.
  </p>
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="thread-subscribe-form" action="/notifications/thread" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="GN6OmBja4qbxqPjHLhdgw8ALcgiDkJL32X5xZO3eiC0QSUObR/rA2q9RlcxCtt1qQHZaiVLpEKk3chbj2j3xeg==" />    <input type="hidden" name="repository_id" id="repository_id" value="8608480" class="form-control" />
<input type="hidden" name="thread_id" id="thread_id" value="368398206" class="form-control" />
<input type="hidden" name="thread_class" id="thread_class" value="Issue" class="form-control" />
<input type="hidden" name="id" id="id" value="mute" class="form-control" />

<button class="btn btn-block" type="submit" data-disable-with="Submitting…">
  <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
  Unsubscribe
</button>
</form></div>



<footer class="clearfix">
  <div class="container">
	<a href="#"><svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>

	<ul class="clearfix">
	  <li>
		<!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-preference-form" action="/site/mobile_preference" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="OxoI9zfoJvakEH+9VUorM6ujrsAe0Y2ec8G1KterZTtXcpwbQPb3356GMNO5muqfEe4g0URoE1KLOTmAt66vNg==" />
  <input type="hidden" name="mobile" value="false">
  <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

  <button type="submit" class="switch-to-desktop" data-ga-click="Mobile, switch to desktop, switch button">
	Desktop version
  </button>
  </form>(/li> shoppingandmore2017 / https-rabatteundgutscheine.wordpress.com-

Your account has been flagged.

Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.

Code Issues 0 Pull requests 0 Projects 2 Wiki Pulse Community

view

html lang="De"><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <meta name="b85b462e6888d82" content="1f161cd5a3afcbfaac2eaa43b85b3f89" /> <meta name="google-site-verification" content="FvadgHWOiqjkeEcd2zffF6QGthpgUPuRt5OMAPLhTes" /> <meta name="verification" content="5beb210f277740818ab1e9c19d5e8a6a" /> <title>Finde den Code</title> <meta name="keywords" content="" /> <meta name="description" content="" /> <meta name="viewport" content="width=device-width, initial-scale=1"> <meta property="og:title" content=""/> <meta property="og:description" content=""/> <meta property="og:image" content=""/> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <link rel="alternate" hreflang="De" href="https://www.cashbackdeals.de/user/find-the-code.php" /> <link rel="canonical" href="https://www.cashbackdeals.de/user/find-the-code.php"/> <link rel="icon" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/favicon.ico" type="image/x-icon"> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/layout.css" rel="stylesheet" type="text/css" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/popup/popup.css" rel="stylesheet" type="text/css" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/help.css" rel="stylesheet" type="text/css" /> <link href="/general.assets/js/jquery-ui/jquery-ui.min.css" rel="stylesheet" type="text/css" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/popup.style.css" rel="stylesheet" type="text/css" /> <link rel="stylesheet" type="text/css" href="/general.assets/css/sexy-captcha/styles.css" /> <link href="/general.assets/libs/SpryAssets/SpryCollapsiblePanel.css" type="text/css" rel="stylesheet" /> <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/popup/css" type="text/css" rel="stylesheet" media="screen" /> <link rel="stylesheet" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/jquery.fancybox-visit.css" type="text/css" media="screen" /> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationTextField.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationTextarea.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationCheckbox.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/validation.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/libs/SpryAssets/SpryValidationPassword.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/css/jquery.counter-analog.css"/> <link rel="stylesheet" type="text/css" href="/general.assets/css/date_picker/flora.datepick.css" /> <link href="/general.assets/css/reviews.css" rel="stylesheet" /> <link rel="stylesheet" type="text/css" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/find-code.css"/> <!--Home trending box tabs --> <link rel="stylesheet" type="text/css" href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/home-trend-tab.css" /> <script type="text/javascript" src="/general.assets/js/jquery.min.js"></script> <script type="text/javascript" src="/general.assets/js/modernizr.custom.js"></script> <script src="/general.assets/js/jquery-ui/jquery-ui.min.js"></script> <script type="text/javascript" src="/general.assets/js/jquery.sexy-captcha-0.1.js"></script> <script type="text/javascript" src="/general.assets/js/jquery.barrating.min.js"></script> <script src="/general.assets/libs/SpryAssets/SpryCollapsiblePanel.js" type="text/javascript"></script> <script type="text/javascript" src="/general.assets/libs/fancybox/jquery.fancybox.pack.js"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationTextField.js" type="text/javascript"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationTextarea.js" type="text/javascript"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationCheckbox.js" type="text/javascript"></script> <script src="/general.assets/libs/SpryAssets/SpryValidationPassword.js" type="text/javascript"></script> <script src="/general.assets/js/jquery.counter.js" type="text/javascript"></script> <script src="/general.assets/js/jquery.datepick.js" type="text/javascript"></script> <script src="/general.assets/js/jquery.datepick-de.js" type="text/javascript"></script> <!-- OneSignal --> <link rel="manifest" href="/manifest.json"> <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script> 	 <link href="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/css/responsive.css" rel="stylesheet" type="text/css" /> <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" /> <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css' /> <link href='https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700' rel='stylesheet' type='text/css' /> <link href="/general.assets/css/icon-fonts/font.css" rel="stylesheet" type="text/css" /> <link href="https://plus.google.com/106394136536174905587" rel="publisher"> <script> var gaProperty = 'UA-45187893-1'; var disableStr = 'ga-disable-' + gaProperty; if (document.cookie.indexOf(disableStr + '=true') > - 1) { window[disableStr] = true; } function gaOptout() { document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'; window[disableStr] = true; } (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga'); ga('create', 'UA-45187893-1', 'auto'); ga('set', 'anonymizeIp', true); ga('send', 'pageview'); $(document).ready(function () { $("#menu_icon").click(function () { $(".burger_menu").toggle(); }); $(".cat-menu").click(function () { $(".CatLinkCont").toggle(); }); /* Header Messager Timer */ if ($('#timer').length > 0) { var timer; var compareDate = new Date(''); compareDate.setDate(compareDate.getDate() + parseInt('')); compareDate.setHours(23); compareDate.setMinutes(59); compareDate.setSeconds(59); timer = setInterval(function () { timeBetweenDates(compareDate); }, 1000); function timeBetweenDates(toDate) { var dateEntered = toDate; var now = new Date(); var difference = dateEntered.getTime() - now.getTime(); if (difference <= 0) { // Timer done clearInterval(timer); $('#timer').css('visibility', 'hidden'); } else { var seconds = Math.floor(difference / 1000); var minutes = Math.floor(seconds / 60); var hours = Math.floor(minutes / 60); var days = Math.floor(hours / 24); hours %= 24; minutes %= 60; seconds %= 60; $("#days").text(days); $("#hours").text(hours); $("#minutes").text(minutes); $("#seconds").text(seconds); } } } }); </script> <script type="text/javascript"> $(document).ready(function () { $("h2.cat-icon").click(function () { $(".categoryContainerHeader").toggle(); }); $("h2.account-icon").click(function () { $(".todoContainerHeader").hide(); $(".myAcoountContainerHeader").toggle(); }); $("h2.todo-icon").click(function () { $(".myAcoountContainerHeader").hide(); $(".todoContainerHeader").toggle(); }); }); </script> </head> <div id="fb-root"></div> <script src="/general.assets/js/fb_login.js" type="text/javascript"></script> <body> <section class="bodyWrapper" onclick="closeCookieBar();"> <!-- ADMIN BAR start --> <!-- ADMIN BAR end --> <!-- Takeover Different banner code start --> <!-- takeover diff banner code end --> <div class="leftBanner main_banner"> <a class="various" href="#inline_store_visit" onClick="loginFancyPopUP({cashback: '4,00%', storeName: 'Under Armour', urlKey: 'under-armour-de', imgUrl: 'https://static.orangebuddies.nl/image/stores/85175.gif', itemId: '0', bannerId: '35627', isCbkDay: '0'})" title="Under Armour"><img class="main_sidebanner" width="120" height="400" src="https://static.orangebuddies.nl/image/banners/35627-SkyScraperWrapper.jpg" alt="Under Armour" /></a> <img src="" width="0" height="0" style="display:none"/> </div> <!-- new --> <div id="top-container" class="clearfix"> <div id="top"> <span class="top-usp"> </span> <div id="top-subscribe"> <span><a href="javascript:void(0);" class="t-user active"><i class="fa fa-globe" aria-hidden="true"></i> </i></a> <div> <div class="column"> <ul> <li><a target="_blank" href="https://www.cashbackkorting.nl/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/netherlands.jpg" alt="netherlands-flag" title ="netherlands-flag"></span> <span> Cashbackkorting.nl<!--Niederlande--></span> </a> </li> <li> <a target="_blank" href="http://www.cashbackdeals.be/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/belgium.jpg" alt="belgium-flag" title ="belgium-flag"></span> <span> Cashbackdeals.be<!--Belgien--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackreduction.fr/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/france.jpg" alt="france-flag" title ="france-flag"></span> <span> Cashbackreduction.fr<!--Frankreich--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.de/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/germany.jpg" alt="germany-flag" title ="germany-flag"></span> <span> Cashbackdeals.de<!--Deutschland--></span> </a> </li> <li><a target="_blank" href="https://www.cashbacksparen.at/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/austria.jpg" alt="austria-flag" title ="austria-flag"></span> <span> Cashbacksparen.at<!--Österreich--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.ch/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/switzerland.jpg" alt="switzerland-flag" title ="switzerland-flag"></span> <span> Cashbackdeals.ch<!--Schweiz--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackrabat.pl/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/poland.jpg" alt="poland-flag" title ="poland-flag"></span> <span> Cashbackrabat.pl<!--Polen--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.it/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/italy.jpg" alt="italy-flag" title ="italy-flag"></span> <span> Cashbackdeals.it<!--Italien--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackearners.co.uk/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/uk.jpg" alt="uk-flag" title ="uk-flag"></span> <span> Cashbackearners.co.uk<!--England--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.se/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/sweden.jpg" alt="sweden-flag" title ="sweden-flag"></span> <span> Cashbackdeals.se<!--Schweden--></span> </a> </li> <li> <a target="_blank" href="http://www.cashbackdeals.es/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/spain.png" alt="spain-flag" title ="spain-flag"></span> <span> Cashbackdeals.es<!--Spanien--></span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.fi/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/finland.png" alt="finland-flag" title ="finland-flag" /></span><span> Cashbackdeals.fi<!--Finnland--></span></a> </li> <li><a target="_blank" href="https://www.cashbackearners.com/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/usa.png" alt="usa-flag" title ="usa-flag" /></span><span> Cashbackearners.com<!--Finnland--></span></a> </li> <li><a target="_blank" href="https://www.cashbackearners.com.au/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/australia.png" alt="australia-flag" title ="australia-flag" /></span><span> Cashbackearners.com.au</span></a> </li> <li><a target="_blank" href="https://www.cashbackearners.ca/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/Canada.png" alt="canada-flag" title ="canada-flag"></span> <span> Cashbackearners.ca </span> </a> </li> <li><a target="_blank" href="https://www.cashbackdeals.dk/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/denmark.png" alt="denmark-flag" title ="denmark-flag" /></span><span> Cashbackdeals.dk</span></a> </li> <li><a target="_blank" href="https://www.cashbackdeals.cz/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/czech.png" alt="czech-flag" title ="czech-flag" /></span><span> Cashbackdeals.cz</span></a> </li> <li><a target="_blank" href="https://www.cashbackdeals.no/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/norway.jpg" alt="norway-flag" title ="norway-flag" /></span><span> Cashbackdeals.no</span></a> </li> <li><a target="_blank" href="https://www.cashbackdeals.pt/"><span><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/portugal.png" alt="portugal-flag" title ="portugal-flag" /></span><span> Cashbackdeals.pt</span></a> </li> </ul> </div> </div> </span> <span class="w-user"> <a href="/" class="t-user active"><i class="fa fa-user"></i> Willkommen Jasmin</a> <div> <div class="column"> <ul> <li><a href="/user/cashback.php"><i class="fa fa-database"></i> Saldo 21,720</a></li> <li><a href="/user/welcome.php"><i class="fa fa-pencil"></i> Mein Konto</a></li> <li><a href="/user/cashmail.php"><i class="fa fa-envelope"></i> Posteingang (73)</a></li> <li><a href="/user/logout.php"><i class="fa fa-power-off"></i> Ausloggen</a></li> </ul> </div> </div> </span> <span class="notifi-dd"> <sapn class="notifi-icon"> <a href="javascript:void(0)"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/notify_bell.png"></a> <span class="notifi-no">0</span> </sapn>	 <div class="notifi-list"> <ul> <li class="no-notifi"> Keine neue Benachrichtigungen </li> <li class="notifi-all"> <span><a href="/user/notifications.php">Alle Benachrichtigungen anzeigen</a></span>	 </li> </ul> </div>	 </span> <span class="top-help"> <a href="/static/help" class="t-help t-user active"><i class="fa fa-info-circle"></i> Hilfe</a> <div> <div class="column"> <ul> <li><a href="/static/faq.php"><i class="fa fa-question-circle"> </i>FAQ</a></li> <li><a href="/static/contact.php"><i class="fa fa-comment-o"></i> Anfrage stellen </a></li> <li><a href="/user/generateticket.php"><i class="fa fa-cart-plus"></i> Antrag für fehlende Transaktion stellen </a></li> <li><a href="/user/ticket.php"><i class="fa fa-ticket"> </i>Deine Hilfe-Tickets </a></li> </ul> </div> </div> </span> </div> </div> </div> <!-- end new --> <!-- Header --> <div id="header"> <a href="/" title="CashbackDeals.de"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/logo.png" alt="CashbackDeals.de" id="logo" /> </a> <div id="search"> <input type="hidden" name="lbl_find_shop_action" id="lbl_find_shop_action" value="Suche Shop, Produkt oder Deal" /> <form method="get" action="/search/search.php" id="frmMainSearch"> <input type="text" autocomplete="off" class="search-field" value="Suche Shop, Produkt oder Deal" name="q" id="searchinput" onKeyUp="getSearchResults(this.value, 'searchBox', 'search_results.php', '', 'searchChkbox')" /> <div class="searc-selection"> <button type="button" class="searc-SDD" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-caret-down"></i></button> <div class="searc-SDC" style=""> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="store" value="store" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > Shops</label></span> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="deal" value="deal" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > Angebote</label></span> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="category" value="category" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > Kategorien</label></span> <span class="searc-sel-opt"><label><input class="searchChkbox" type="checkbox" name="faq" value="faq" checked onchange= "getSearchResults($('#searchinput').val(), 'searchBox', 'search_results.php', '', 'searchChkbox')" > FAQ</label></span> </div>	 </div> <input type="submit" value='' class="search-submit" id="searchbtn" /> <div style="background: none repeat scroll 0 0 #FFFFFF;display:none;margin-top:29px;position:absolute;width:250px;z-index:222;" id="searchBox"></div> </form> <div id="search-tips"> Tipps: <a href="/cashback/vodafone-mobilfunk.php">Vodafone (Mobilfunk & Data)</a> <a href="/cashback/deutsche-postbank.php">Postbank</a> <a href="/cashback/bonprixde.php">bonprix</a> <a href="/cashback/blau-mobilfunk-de.php">blau Mobilfunk</a> </div> </div> <script type="application/ld+json"> { "@context": "http://schema.org", "@type": "WebSite", "url": "https://www.cashbackdeals.de/", "potentialAction": { "@type": "SearchAction", "target": "https://www.cashbackdeals.de/search/search.php?q={search_term}", "query-input": "required name=search_term" } } </script> </div> <div id="container" class="clearfix"> <div id="menu"> <h1 class="heading-1" style="display: none;"><a href="https://www.cashbackdeals.de/">Verdiene Geld mit :</a></h1> <ul> <li><a href="/shops/shops.php?url_key=all">Shoppen</a> <div> <div class="nav-column"> <h3> <a href="/shops/all-categories.php">Kategorien</a> </h3> <ul> <li><a href="/shops/category-overview.php?url_key=baby-und-kind">Baby & Kind</a></li> <li><a href="/shops/category-overview.php?url_key=bucher-und-zeitschriften">Bücher & Zeitschriften</a></li> <li><a href="/shops/category-overview.php?url_key=geschenke-und-gadgets">Geschenke & Gadgets</a></li> <li><a href="/shops/category-overview.php?url_key=computer">Elektronik & Unterhaltung</a></li> <li><a href="/shops/category-overview.php?url_key=foto-und-kamera">Foto & Kamera</a></li> <li><a href="/shops/category-overview.php?url_key=mode">Mode & Fashion</a></li> <li><a href="/shops/category-overview.php?url_key=finanzen">Finanzen & Strom</a></li> <li><a href="/shops/category-overview.php?url_key=haushalt">Haushalt</a></li> <li><a href="/shops/category-overview.php?url_key=games-filme-und-musik">Games, Filme & Musik</a></li> <li><a href="/shops/all-categories.php" class="nav-all">Alle Kategorien</a></li> </ul> </div> <div class="nav-column"> <h3> <a href="/shops/shops.php?url_key=all">Shoppen</a> </h3> <ul> <li> <a href="/cashback/na-kd-com.php">NA-KD.com</a> </li> <li> <a href="/cashback/vodafone-dsl.php">Vodafone (DSL, LTE & TV)</a> </li> <li> <a href="/cashback/blau-mobilfunk-de.php">blau Mobilfunk</a> </li> <li> <a href="/cashback/nord-vpn-de.php">NordVPN</a> </li> <li> <a href="/cashback/agila.php">AGILA</a> </li> <li> <a href="/cashback/groupon-shopping.php">Groupon Shopping</a> </li> <li> <a href="/cashback/o2-de.php">O2</a> </li> <li> <a href="/cashback/tarifcheck24.php">TARIFCHECK</a> </li> <li> <a href="/cashback/saturn.php">SATURN</a> </li> <li> <a href="/cashback/vodafone-mobilfunk.php">Vodafone (Mobilfunk & Data)</a> </li> <li> <a href="/shops/shops.php?url_key=all" class="nav-all">Alle Online-Shops</a> </li> </ul> </div> <div class="nav-column"> <h3><a href="/shops/newshops.php">Neue Shops</a></h3> <ul> <li> <a href="/cashback/studienwelt-laudius-kursteilnahme.php">Studienwelt Laudius (Kursteilnahme)</a> </li> <li> <a href="/cashback/zotter-schokoladen-manufaktur-de.php">Zotter Schokoladen Manufaktur</a> </li> <li> <a href="/cashback/neckermann-moebel-und-heimtextilien-de.php">Neckermann Möbel & Heimtextilien</a> </li> <li> <a href="/cashback/mrlens-de.php">MrLens</a> </li> <li> <a href="/cashback/callmobile-de.php">callmobile</a> </li> <li> <a href="/cashback/dr-goerg-de.php">Dr. Goerg</a> </li> <li> <a href="/cashback/galerie-liebherr-de.php">Galerie Liebherr</a> </li> <li> <a href="/cashback/goodydogde-de.php">Goodydog.de</a> </li> <li> <a href="/cashback/gooodde-de.php">goood</a> </li> <li> <a href="/cashback/lieblingsmensch24de-de.php">lieblingsmensch24.de</a> </li> <li><a class="nav-all" href="/shops/newshops.php">Alle neuen Shops ansehen </a></li> </ul> </div> <div class="nav-action"> </div> </div> </li> <li> <a href="/shops/deals.php">Angebote</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li> <a href="/shops/dailydeals-service.php">Tagesangebote </a> </li> <li> <a href="/shops/deals.php?type=kortingscodes">Rabattcodes </a> </li> <li> <a href="/shops/deals.php?type=last">Letzte Chance </a> </li> <li> <a href="/shops/deals.php?type=new">Neue Angebote </a> </li> <li> <a href="/shops/deals.php?type=tip">Beliebte Angebote </a> </li> <li> <a href="/shops/deals.php?type=special">Sonderangebote </a> </li> <li> <a href="/static/manufacturer-cashback/">Cashback-Aktionen der Hersteller </a> </li> </ul> </div> </div> </li> <li><a href="/comparison/">Vergleich</a></li> <li><a href="/shops/shops.php">Gratis </a></li> <li><a href="/static/earn-money.php">Sofort Verdienst</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li><a href="/user/cashmail.php">CashMails </a></li> <li><a href="/shops/bannerkliks.php">Bannerklicks </a></li> <li><a href="/shops/click-earn-campaigns.php">Klicken und Verdienen </a></li> <li><a href="/shops/delen.php">Teilen </a></li> <li><a href="/user/inbox-surveys.php">Umfragen </a></li> <li><a href="/static/whatsapp.php">WhatsApp </a></li> </ul> </div> </div> </li> <li><a href="/user/cashboost-new.php">Cashboost</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li> <a href="/user/detail.php"> Profil ergänzen </a> </li> <li> <a href="/user/cashboost.php"> Freunde einladen </a> </li> <li> <a href="/static/mobile-app.php"> App installieren </a> </li> <li> <a href="/static/toolbar.php"> Cashback-Melder downloaden </a> </li> <li> <a href="/testimonials/add.php"> Empfehlung schreiben </a> </li> <li> <a href="/shops/reviews.php"> Online-Shops bewerten </a> </li> <li> <a href="/static/top-campaigns.php"> Top Deals </a> </li> <li> <a href="/spellen/"> Spiele </a> </li> <li> <a href="/onlinepanel/"> Online Panels </a> </li> <li> <a href="/comparison/"> Vergleich </a> </li> </ul> </div> </div> </li> <li><a href="/shops/win-competition.php">Gewinnen</a> <div class="nav-small"> <!-- please note this extra classs for small submenus --> <div class="nav-column"> <ul> <li> <a href="/user/sports-predictions.php"> Ergebnis voraussagen </a> </li> <li> <a href="/user/competitions/"> Aktionen/Wettbewerbe </a> </li> <li> <a href="/user/lottery.php"> Lotterie </a> </li> <li> <a href="/user/jackpot.php"> Jackpot </a> </li> <li> <a href="/user/bingo.php"> Bingo </a> </li> <li> <a href="/user/find-the-code.php"> Finde den Code </a> </li> </ul> </div> </div> </li> <li><a href="/blog/">Blog</a></li> <li class="download-app-menu"><a class="app-icon" href="/static/mobile-app.php"><div class="download-app"><span>APP</span></div> </a></li> <li class="download-app-menu"><a class="app-icon" href="/static/toolbar.php"><div class="alert-bar"><span>Alert</span></div> </a></li> </ul> </div> <!--- responseiv menu--> <div class="burgermenu"> <div id="menu_icon"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/burger_menu.png" alt="Menu" title ="Menu" width="20px" height="16px"> Verdiene Geld mit</div> <div class="resp-app-button"> <a class="app-icon" href="/static/mobile-app.php"> <div class="download-app"><span>APP</span></div> </a> <a class="app-icon" href="/static/toolbar.php"> <div class="alert-bar"><span>Alert</span></div> </a> </div> <div class="burger_menu"> <ul class="cd-accordion-menu"> <li class="has-children"> <input type="checkbox" name="group-1" id="group-1"> <label for="group-1">Shoppen</label> <ul> <li class="has-children"> <input type="checkbox" name="sub-group-1" id="sub-group-1"> <label for="sub-group-1">Kategorien</label> <ul> <li><a href="/shops/category-overview.php?url_key=baby-und-kind">Baby & Kind</a></li> <li><a href="/shops/category-overview.php?url_key=bucher-und-zeitschriften">Bücher & Zeitschriften</a></li> <li><a href="/shops/category-overview.php?url_key=geschenke-und-gadgets">Geschenke & Gadgets</a></li> <li><a href="/shops/category-overview.php?url_key=computer">Elektronik & Unterhaltung</a></li> <li><a href="/shops/category-overview.php?url_key=foto-und-kamera">Foto & Kamera</a></li> <li><a href="/shops/category-overview.php?url_key=mode">Mode & Fashion</a></li> <li><a href="/shops/category-overview.php?url_key=finanzen">Finanzen & Strom</a></li> <li><a href="/shops/category-overview.php?url_key=haushalt">Haushalt</a></li> <li><a href="/shops/category-overview.php?url_key=games-filme-und-musik">Games, Filme & Musik</a></li> </ul> </li> <li class="NoSubMenu"><a href="/shops/all-categories.php" target="_self">Alle Kategorien</a></li> <li class="has-children"> <input type="checkbox" name="sub-group-2" id="sub-group-2"> <label for="sub-group-2">Shoppen</label> <ul> <li> <a href="/cashback/na-kd-com.php">NA-KD.com</a> </li> <li> <a href="/cashback/vodafone-dsl.php">Vodafone (DSL, LTE & TV)</a> </li> <li> <a href="/cashback/blau-mobilfunk-de.php">blau Mobilfunk</a> </li> <li> <a href="/cashback/nord-vpn-de.php">NordVPN</a> </li> <li> <a href="/cashback/agila.php">AGILA</a> </li> <li> <a href="/cashback/groupon-shopping.php">Groupon Shopping</a> </li> <li> <a href="/cashback/o2-de.php">O2</a> </li> <li> <a href="/cashback/tarifcheck24.php">TARIFCHECK</a> </li> <li> <a href="/cashback/saturn.php">SATURN</a> </li> <li> <a href="/cashback/vodafone-mobilfunk.php">Vodafone (Mobilfunk & Data)</a> </li> </ul> </li> <li><a href="/shops/shops.php?url_key=all" target="_self">Alle shops</a></li> <li class="has-children"> <input type="checkbox" name="sub-group-3" id="sub-group-3"> <label for="sub-group-3">Hervorgehoben</label> <ul> <li><a href="/shops/deals.php">Angebote</a></li> </ul> </li> </ul> </li> <li class="has-children"> <input type="checkbox" name="sub-group-4" id="sub-group-4"> <label for="sub-group-4">Angebote</label> <ul> <li> <a href="/shops/dailydeals-service.php">Tagesangebote </a> </li> <li> <a href="/shops/deals.php?type=kortingscodes">Rabattcodes </a> </li> <li> <a href="/shops/deals.php?type=new">Neue Angebote </a> </li> <li> <a href="/shops/deals.php?type=tip">Beliebte Angebote </a> </li> <li> <a href="/shops/deals.php?type=special">Sonderangebote </a> </li> <li> <a href="/static/manufacturer-cashback/">Cashback-Aktionen der Hersteller </a> </li> </ul> </li> <li><a href="/comparison/" target="_self">Vergleich</a></li> <li><a href="/shops/shops.php" target="_self">Gratis</a></li> <li class="has-children"> <input type="checkbox" name="sub-group-5" id="sub-group-5"> <label for="sub-group-5">Sofort Verdienst</label> <ul> <li><a href="/user/cashmail.php">CashMails </a></li> <li><a href="/shops/bannerkliks.php">Bannerklicks </a></li> <li><a href="/shops/click-earn-campaigns.php">Klicken und Verdienen </a></li> <li><a href="/shops/delen.php">Teilen </a></li> <li><a href="/static/whatsapp.php">WhatsApp </a></li> </ul> </li> <li class="has-children"> <input type="checkbox" name="sub-group-6" id="sub-group-6"> <label for="sub-group-6">Cashboost</label> <ul> <li> <a href="/user/detail.php"> Profil ergänzen </a> </li> <li> <a href="/user/cashboost.php"> Freunde einladen </a> </li> <li> <a href="/static/mobile-app.php"> App installieren </a> </li> <li> <a href="/static/toolbar.php"> Cashback-Melder downloaden </a> </li> <li> <a href="/testimonials/add.php"> Empfehlung schreiben </a> </li> <li> <a href="/shops/reviews.php"> Online-Shops bewerten </a> </li> <li> <a href="/static/top-campaigns.php"> Top Deals </a> </li> <li> <a href="/spellen/"> Spiele </a> </li> <li> <a href="/onlinepanel/"> Online Panels </a> </li> <li> <a href="/comparison/"> Vergleich </a> </li> </ul> </li> <li class="has-children"> <input type="checkbox" name="sub-group-7" id="sub-group-7"> <label for="sub-group-7">Gewinnen</label> <ul> <li> <a href="/user/sports-predictions.php"> Ergebnis voraussagen </a> </li> <li> <a href="/user/competitions/"> Aktionen/Wettbewerbe </a> </li> <li> <a href="/user/lottery.php"> Lotterie </a> </li> <li> <a href="/user/jackpot.php"> Jackpot </a> </li> <li> <a href="/user/bingo.php"> Bingo </a> </li> <li> <a href="/user/find-the-code.php"> Finde den Code </a> </li> </ul> </li> <li> <a href="/blog/" target="_self">Blog</a> </li> </ul> </div> </div> <!-- end of responsive --> <div id="main"> <div id="main-content"> <div class="alert-popup-wrap"> <div class="alert-popup-content" id=""> <div class="alert-popup-exit"></div> </div> </div> <!-- Content --> <div id="main-content"> <div id="breadcrumbs"> <ol itemscope itemtype="http://schema.org/BreadcrumbList"> <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="https://www.cashbackdeals.de/"> <span itemprop="name">Startseite</span></a> <meta itemprop="position" content="1" /> </li><li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a itemprop="item" href="https://www.cashbackdeals.de/shops/win-competition.php"> <span itemprop="name">Gewinnen</span></a> <meta itemprop="position" content="2" /> </li><li>Finde den Code</li></ol> </div> <div class="CodeImg"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/coupon-code/Find-a-code-Banner.png" alt=""></div> <div class="ClaimTxtBox"> Finde den Code! Wir verstecken jedes Wochenende einen Geheimcode auf unserer Website. Jeden Freitag bis Sonntag kannst du den Code suchen und zusätzliche CashCoins gewinnen. </div> <div class="dropdown-out" id="dout"> <div class="reward_heading"> <h3>Belohnung für Mitglieder</h3> <p>Du kannst <span>0,05</span> bis <span>10,00</span> CashCoins gewinnen. Für jeden Code, den du auf unserer Webseite gefunden hast, bekommst du 0,01 CashCoins. Du bekommst die Belohnung einmal pro Code, der gefunden wurde.</p> </div> <div class="fc-reward-table"> <div class="fc-reward-row fc-reward-heading"> <div class="fc-reward-member">Zusätzliche Belohnung pro Gewinner</div> <div class="fc-reward-cashion">Belohnung</div> </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">10de lid</div> 	 <div class="fc-reward-cashion">0,05</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">25ste lid</div> 	 <div class="fc-reward-cashion">0,10</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">50ste lid</div> 	 <div class="fc-reward-cashion">0,25</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">100ste lid</div> 	 <div class="fc-reward-cashion">1,00</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">250ste lid</div> 	 <div class="fc-reward-cashion">2,50</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">500ste lid</div> 	 <div class="fc-reward-cashion">5,00</div> 	 </div> 		 <div class="fc-reward-row"> 	 <div class="fc-reward-member">1000ste lid</div> 	 <div class="fc-reward-cashion">10,00</div> 	 </div> </div> </div> </div> <div class="bingo_dropdown"> <input name="dropdown" type="button" class="dropdown" value="Wie funktioniert das?" id="dropdown" onclick="dropdown()" /> </div> <div class="FindCode"> <h2 class="new-heading">Finde den Code und überprüfe deinen Preis!</h2> <div class="InputField"><input type="text" id="coupon-code" name="coupon_code" class="CodeInput" value="Füge den Code ein" placeholder="Füge den Code ein"onfocus="(this.value = '')" autocomplete="off" /></div> <div><button id="verify-code" style="width:100%;"><div class="CodeBtn">Kontrolliere den Code </div></button><br /><br /> <p id="response-text"></p> </div> </div> <div class="FindCode"> <div class="CodeHint">Tipp, um den Code zu finden:</div> <p>Hier kannst du einen neuen Code von Freitag bis Sonntag finden</p> </div> <h2 class="new-heading">Die letzten 25 Gewinner</h2> <div class="shop_table"> 	<div class="latestwinner_heading"> 		<span class="win_date"> Datum</span> 		<span class="winner_name"> Mitglied</span> 		<span class="winn_claimed"> Beantragt</span> 	</div> 	</div> </div> <script> $(document).ready(function () { $("#dout").hide(); }); jQuery('#dropdown').live('click', function (event) { jQuery('#dout').toggle('show'); }); $(function () { 	var isRequested = false; 	var responseText = $('#response-text'); 	$('#coupon-code').on('keypress', function (e) { 		if (e.keyCode == 13) 			verifyCoupon(e); 	}); 	$('#verify-code').click(function (e) { 		verifyCoupon(e); 	}); 	function verifyCoupon(e) { 		e.preventDefault(); 		var couponCode = $('#coupon-code').val().trim(); 		if (couponCode == '') { 			responseText.clearQueue().stop().text('Füge deinen Code ein').fadeIn(300).delay(3000).fadeOut(100, function () { 				responseText.text(''); 			}); 			return; 		} 		if (!isRequested) { 			isRequested = true; 			$.ajax({ 				url: '../ajax/verify_coupon_code.php', 				data: 'coupon_code=' + couponCode, 				type: 'POST', 				beforeSend: function () { 					responseText.text('Bitte warten ...').show(); 				}, 				complete: function () { 					isRequested = false; 				}, 				success: function (response) { 					responseText.hide(); 					if (response === null) { 						$('#redeem_response').html('API Error!'); 						responseText.text('API Error!').show(); 					} else{ 						$('#redeem_response').html(response.message); 						responseText.text(response.message).show(); 					} 				} 			}); 		} 	} }); </script> <div class="footerbanner "> &nbsp; <a class="various" href="#inline_store_visit" onclick="loginFancyPopUP({cashback: '25,00 ', storeName: 'Verivox', urlKey: 'verivox', imgUrl: 'https://static.orangebuddies.nl/image/stores/34193.jpg', itemId: '0', bannerId: '36031', isCbkDay: '1'})"> <img src="https://static.orangebuddies.nl/image/banners/36031-Normal.jpg" alt="Verivox"> </a> </div> </div> <!-- End Content --> </div> </div> <!-- End Main --> <div id="footer"> <div class="FooterDetail"> <div class="FooterQuickLink"> <div class="FooterMenu"> <ul class="grid effect-1" id="grid"> <li> <p>Angebote</p> <p class="FooterMenuLink"><a href="/shops/dailydeals-service.php" target="_self">Tagesangebote</a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=kortingscodes" target="_self">Rabattcodes </a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=new" target="_self">Neue Angebote</a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=tip" target="_self">Beliebte Angebote</a></p> <p class="FooterMenuLink"><a href="/shops/deals.php?type=special" target="_self">Sonderangebote</a></p> <p class="FooterMenuLink"><a href="/static/manufacturer-cashback/" target="_self">Cashback-Aktionen der Hersteller</a></p> </li> <li> <p>Hilfreiche Webshop-Tipps</p> <p class="FooterMenuLink"><a href="/static/page.php?url_key=uitleg-shops" target="_self">Wie das Einkaufen mit Cashback funktioniert</a></p> <p class="FooterMenuLink"><a href="/static/page.php?url_key=uitleg-kortingscodes" target="_self">Rabattcodes und Cashback</a></p> <p class="FooterMenuLink"><a href="/shops/shops.php?url_key=all" target="_self">Suche nach Online-Shops </a></p> <p class="FooterMenuLink"><a href="/shops/shops.php?url_key=all" target="_self">Alle Online-Shops mit Cashback</a></p> <p class="FooterMenuLink"><a href="/static/earn-money.php" target="_self">Alle Wege, um Geld zu verdienen</a></p> <p class="FooterMenuLink"><a href="/comparison/" target="_self">Vergleich</a></p> <p class="FooterMenuLink"><a href="/static/page.php?url_key=uitleg-verdien-meer" target="_self">Sofort Verdienst</a></p> <p class="FooterMenuLink"><a href="/user/cashboost-new.php" target="_self">Cashboost</a></p> <p class="FooterMenuLink"><a href="/shops/win-competition.php" target="_self">Gewinnen</a></p> <p class="FooterMenuLink"><a href="/shops/shops.php" target="_self">Gratis Cashback</a></p> <p class="FooterMenuLink"><a href="/blog/" target="_self">Blog</a></p> </li> <li> <p>Hilfe</p> <p class="FooterMenuLink"><a href="/static/faq.php" target="_self">FAQ </a></p> <p class="FooterMenuLink"><a href="/user/generateticket.php" target="_self">Antrag für fehlende Transaktion stellen</a></p> <p class="FooterMenuLink"><a href="/static/contact.php" target="_self">Anfrage stellen </a></p> </li> <li> <p>Tools</p> <p class="FooterMenuLink"><a href="/static/mobile-app.php" target="_self">App installieren</a></p> <p class="FooterMenuLink"><a href="/static/toolbar.php" target="_self">Cashback-Melder downloaden </a></p> <p class="FooterMenuLink"><a href="/tech-check" target="_self">PC Check</a></p> </li> <li> <p>CashbackDeals.de</p> <p class="FooterMenuLink"><a href="/static/about-us/" target="_self">Über uns</a></p> <p class="FooterMenuLink"><a href="/static/affiliates/" target="_self">Affiliates</a></p> <p class="FooterMenuLink"><a href="/static/advertise/" target="_self">Werben</a></p> <p class="FooterMenuLink"><a href="/static/sitemap/" target="_self">Sitemap </a></p> </li> <li> <p>Allgemein</p> <p class="FooterMenuLink"><a href="/static/terms-and-conditions/" target="_self">AGB</a></p> <p class="FooterMenuLink"><a href="/static/cookies/" target="_self">Cookies</a></p> <p class="FooterMenuLink"><a href="/static/privacy" target="_self">Datenschutz</a></p> <p class="FooterMenuLink"><a href="/static/disclaimer/" target="_self">Disclaimer</a></p> <p class="FooterMenuLink"><a href="/static/impressum/" target="_self">Impressum</a></p> </li> </ul> <script src="/general.assets/js/masonry.pkgd.min.js"></script> <script src="/general.assets/js/imagesloaded.js"></script> <script src="/general.assets/js/classie.js"></script> <script src="/general.assets/js/AnimOnScroll.js"></script> <script> new AnimOnScroll(document.getElementById('grid'), { minDuration: 0.4, maxDuration: 0.7, viewportFactor: 0.2 }); </script> </div> </div> <div class="FollowUs"> <p class="FootHead">Folge uns:</p> <div class="SocialIcons"><a target="_blank" href="https://www.youtube.com/channel/UCiATlA546p52hrcltj3DIBQ"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/follow-us-youtube.gif" alt="Youtube" class="IconAdj"> Folge uns auf YouTube</a></div> <div class="SocialIcons"><a target="_blank" href="https://www.facebook.com/www.cashbackdeals.de/"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/follow-us-facebook.gif" alt="Facebook" class="IconAdj"> Like unsere Facebook-Seite</a></div> <div class="rating"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/star/rating_10.png" width="68" height="12" alt="StarRating" class="padRight20"> Bewertung: 5.00 - 1546 <a href="/testimonials/index.php">Empfehlungen</a> </div> <div class="OtherLogo"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/comodo.png" alt="Comodo secure"> </div> <div class="OtherLogo"> <a href="http://www.keurmerk.info/winkel_detail.php?winkel_id=3868&amp;hfst_id=123" target="_blank"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/LogoKeurmerk.png" alt="Webshop Keurmerk"> </a> </div> </div> </div> <div class="FootSection2"> <div class="OrangeLogo"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/OrangeBuddies-logo.png" alt="OrangeBuddies"></div> <div class="copyRight01"> <p>&copy; 2009-2018 orangebuddies.com | Powered by : <a href="http://www.orangebuddies.com" target="_blank">OrangeBuddies Media</a></p> <p>CashbackDeals.de ist eine von vielen Cashback-Webseiten von OrangeBuddies Media, einem Online-Medienunternehmen, das seit seiner Gründung im Jahre 2009 zu einem internationalen Unternehmen, mit Standorten in den Niederlanden, Deutschland, Spanien, Großbritannien und Kanada herangewachsen ist. Mit mehr als 100 Cashback-Webseiten in Europa, Australien und den Staaten. OrangeBuddies Media spezialisiert sich in Online-Cashback & Bonus-Portalen mit dem Ziel, Mehrwert für Verbraucher und Anzeigenkunden zu bieten.</p> </div> <div class="Celebrating"> <img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/Years10.png" alt=""> <p>10-jähriges Jubiläum im Jahr 2018</p> </div> </div> </div> <div class="BottomBar" id="BottomBar"> <div class="crossBtn"><img onclick="closeDealBar('BottomBar')" style="cursor: pointer;" src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/crossBtn.png" alt="Close" width="26" height="26" /></div> <div class="BarCont"> <div class="ParentBar"> <div class="BarLogo"><img src="https://static.orangebuddies.nl/image/stores/7240.jpg" alt="RandomDeal" class="LogoRes" /></div> <div class="BarCash">bis zu 3,00% CashCoins</div> <div class="BarTxt">5% Rabatt für Neukunden bei zooplus</div> <div class="BarTxt2">Code:<strong>5PRDEAFF</strong></div> <div class="ShopNow"> <a class="various" href="#inline_store_visit" onclick="loginFancyPopUP({cashback: '3,00%', storeName: 'zooplus', urlKey: 'zooplus', imgUrl: 'https://static.orangebuddies.nl/image/stores/7240.jpg', isCbkDay: '1', itemId: '449352'})"> Zum Online-Shop </a> </div> </div> </div> </div> <!-- Takeover different banner code start --> <!-- Takeover different banner code end --> <div class="rightBanner main_banner"> <a class="various" href="#inline_store_visit" onclick="loginFancyPopUP({cashback: '4,00%', storeName: 'Under Armour', urlKey: 'under-armour-de', imgUrl: 'https://static.orangebuddies.nl/image/stores/85175.gif', itemId: '0', bannerId: '35626', isCbkDay: '0'})" title="Under Armour"><img class="main_sidebanner" width="120" height="400" src="https://static.orangebuddies.nl/image/banners/35626-SkyScraperWrapper.jpg" alt="Under Armour" /></a> <img src="" width="0" height="0" style="display:none"/> </div> </section> <!-- bodyWrapper section end --> <!-- PeanutLabs Alert Starts--> <script type="text/javascript" src="/general.assets/js/peanut/alert.js"></script> <script type="text/javascript"> function initAlert() { console.log('fire-peanutalert'); PeanutLabsAlert.initialize({ userId: document.getElementById('user_id').value, debugEnabled: true, // Have debug messages logged to the consolse. hideAfter: 15, // Makes the alert hide after 4 seconds. Can be left out, and will default to 10 seconds. iframeURL: 'https://www.cashbackdeals.de//onlinepanel-pl', // This URL needs to be changed to the url for the iframe. positionHorizontal: 'right', positionVertical: 'bottom', currencyName: 'Peanuts', server: 'https://api.peanutlabs.com', logoURL: 'https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16//assets/osn-icon.png', //'https://ii.peanutlabs.com/PL_Logo.png' alertTitle: 'Neue Umfragen stehen zur Verfügung!', alertMessage: 'Verdiene zusätzliche CashCoins!', alertClickHere: 'Klicke hier' }); } $(document).ready(function () { initAlert(); document.cookie = "peanutAlert=0;-1;path=/"; }); </script> <input id="user_id" type="text" value="92385-9261-c7c25349ba" class="form-control" style="display: none;" placeholder="User Id" readonly> <!-- PeanutLabs Alert Ends --> <script type="text/javascript"> //console.log('Lived'); function reportBrokenLink(urlKey) { var htm = '<a href="/report/' + urlKey + '.php" id="reported-link">report</a>'; jQuery('#genStoreLink').html(htm); loadPopup('.various', '680', '215','genStoreLink'); } function fulcrumSurveySent(user_id, survey_number, site_id){ $.ajax({ url: '/ajax/saveFulcrumSurveySent.php', data: 'user_id=' + user_id + '&survey_number=' + survey_number + '&site_id=' + site_id, type: 'POST', success: function (resp) { location.reload(); //console.log(resp); } }); } function addToFav(id, type, obj) { $.ajax({ url: '/ajax/addToFav.php', data: 'action=addToFav&id=' + id + '&type=' + type, type: 'POST', success: function (resp) { if(type=='outfit'){ if (resp == 1) { $("#" + obj + id).find('img').attr('src', 'https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/fav-full.png'); } else { $("#" + obj + id).find('img').attr('src', 'https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/fav-empty.png'); } }else{ if (resp == 1) { $("#" + obj + id).addClass('fav-icon-active'); } else { $("#" + obj + id).removeClass('fav-icon-active'); } } } }); } function updateWishList(id ,type,selection) { var action = ''; ////////////////////// classes used/////////////// var enableClsFav = 'fa-heart'; //enable fav class var disableClsFav = 'fa-heart-o'; //disable fav class var enableClsFavBell = 'fa-bell'; //enable mail subscribe class var disableClsFavBell = 'fa-bell-slash'; //disable mail subscribe class var favId = 'favStore'; var favNotifyId = 'favNotify'; var commonClsNotify = 'bellicon'; var commonClsHeart = 'hearticon'; var subAllFavId = 'subscribe_all_fav'; if (selection == 'all'){//only work for mail notify bell subscribe var favElementNotifyBell = $("." + commonClsNotify); } else{ var favElementHeart = $("#"+favId+ id);//add favourite element selection need to update var favElementNotifyBell = $("#"+favNotifyId+ id);//subscribe element selection need to update } if(type=='addRemoveFav'){//if user clicked on add fav heart icon if (favElementHeart.hasClass(enableClsFav)) {action = 'remove';} else {action = 'add';} } else if (type == 'updateAlerts'){//if user clicked on fav store mail bell icon notification if(selection=='all'){// if click enable all and disable all mail notifictaions if($("#"+subAllFavId).is(':checked')){action = '1'; } else{action = '0'; } } else{ if (favElementNotifyBell.hasClass(disableClsFavBell)) { action = '1'; } else if (favElementNotifyBell.hasClass(enableClsFavBell)) { action = '0'; } } } $.ajax({ url: '/ajax/update_user_whishlist.php', data: 'action='+action+'&id=' + id + '&type=' + type+'&selection='+selection, type: 'POST', dataType: "json", success: function (resp) { if(type=='addRemoveFav' && resp==1){ if(action=='add'){ favElementHeart.addClass(enableClsFav); favElementHeart.removeClass(disableClsFav); favElementNotifyBell.addClass(enableClsFavBell); favElementNotifyBell.removeClass(disableClsFavBell); }else{ favElementHeart.addClass(disableClsFav); favElementHeart.removeClass(enableClsFav); favElementNotifyBell.removeClass(enableClsFavBell); favElementNotifyBell.addClass(disableClsFavBell); } }else if(type == 'updateAlerts' && resp>0){ if(action=='1'){ favElementNotifyBell.addClass(enableClsFavBell); favElementNotifyBell.removeClass(disableClsFavBell); }else{ favElementNotifyBell.removeClass(enableClsFavBell); favElementNotifyBell.addClass(disableClsFavBell); } } $('#totalunsubs').html($('.'+enableClsFavBell).length); $('#totalsubs').html( $('.'+disableClsFavBell).length); } }); } function rewardCpcClick(key,pIdx) { if (typeof key !== "undefined") { $('#errorbox, #successbox').html('').hide(); var errMsg = ''; var succMsg = ''; $.ajax({ url: '/ajax/rewardCpcClick.php', data: 'url_key=' + key, type: 'POST', success: function (resp) { if (resp !== '') { if ($(resp).text() == 'reward_success') { succMsg = 'Dein Klick wurde erfolgreich registriert und deine Vergütung wurde deinem Konto gutgeschrieben.'; } else if ($(resp).text() == 'reward_failed') { errMsg = 'Dein Klick wurde nicht registriert.'; } else if ($(resp).text() == 'already_rewarded') { errMsg = 'Du hast dieses Angebot bereits angeklickt.'; } else if ($(resp).text() == 'store_zero_reward') { errMsg = 'Dieser Online-Shop vergibt zurzeit kein Cashback.'; } } else { errMsg = 'Keine Ergebnisse gefunden'; } }, async: false }); window.open('/visit/' + key + '.php?cm=1', "_blank");// cm=1 mean don't show the exit page; $('.cpc-' + pIdx).remove(); } else { errMsg = "Keine Ergebnisse gefunden"; } if (errMsg !== '') { $('#errorbox').html(errMsg); $('#errorbox').show(); } if (succMsg !== '') { $('#successbox').html(succMsg); $('#successbox').show(); } $('html,body').scrollTop(0); return false; } function adventSaveClick(myObj){ // console.log("here save click function"+myObj.saveClick); if(myObj.saveClick){ // console.log("Yes save click!"); $.ajax({ url: '/ajax/saveAdventClicks.php', data: 'eventid=' + myObj.eventid + '&adventid=' + myObj.adventid+ '&compid=' + myObj.compid, type: 'POST', success: function (resp) { if(resp!=""){ return resp; } // console.log('clicked saved'); } }); }else{ // console.log("Save No click!"); } } function adventCalenderPopup(myObj){ adventSaveClick(myObj); $('#click').attr('href', myObj.url); $('#click').attr('target','_blank'); $('#advent_imgurl').attr('src', myObj.imgUrl); $('#inline_adventCal').css('min-width','650px').css('min-height','550px'); loadPopup('.various', '650', '650','adventCalenderpopup'); } function showReasonField(isShow){ if(isShow == 0){ document.getElementById('otherMsgContainer').style.display = 'none'; }else{ document.getElementById('otherMsgContainer').style.display = 'block'; } } function regFancyPopUP(myObj) { var landingLink = '/popup/visit.php?url_key=' + myObj.urlKey; var show_goto_store_link = 0; var imageUrl = "/general.assets/images/bx_loader.gif"; if (myObj.channel && myObj.channel === "FBC") { landingLink += '&channel=FBC'; } else if (myObj.channel && myObj.channel === "TOB") { landingLink += '&channel=TOB'; } if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'dagdeal') landingLink += '&type=dagdeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'holidaydeal') landingLink += '&type=holidaydeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'dailydeal') landingLink += '&type=dailydeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == 'citydeal') landingLink += '&type=citydeal&typeId=' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "product") landingLink = '/product/visit/' + myObj.itemId; else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "pfproduct") landingLink = '/pfproduct/visit/' + myObj.itemId; else if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0){ landingLink += '&type=voucher&typeId=' + myObj.itemId; } //Only for website banners if (typeof myObj.bannerId !== "undefined" && myObj.bannerId != 0) { if (myObj.channel && myObj.channel === "TOB") { landingLink += '&toBannerId='+myObj.bannerId; } else { landingLink += '&bannerId='+myObj.bannerId; } } //for blogs if (typeof myObj.blogId !== "undefined" && myObj.blogId != 0) { landingLink += '&blogId=' + myObj.blogId; } //End Only for website banners if (typeof myObj.themeId !== "undefined" && myObj.themeId != 0) landingLink += '&themeId='+myObj.themeId; if (typeof myObj.itemType !== "undefined" && myObj.itemType == "product") { var storeDetailLink = '/product/' + myObj.urlKey + '.php'; } else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "pfproduct") { var storeDetailLink = 'pfproduct/' + myObj.urlKey + '.php'; } else if (typeof myObj.itemType !== "undefined" && myObj.itemType == "voucher" && typeof myObj.voucher_url_key !== "undefined") { var storeDetailLink = '/kortingsactie/'+ myObj.urlKey +'/'+ myObj.voucher_url_key; } else { var storeDetailLink = '/cashback/' + myObj.urlKey + '.php'; } if(typeof myObj.isCbkDay != 'undefined' && myObj.isCbkDay == 1){ var htm = login$('#title_popup_cbk_day').val().replace('//1', myObj.cashback).replace('//2', myObj.storeName); } else{ var htm = $('#title_popup').val().replace('//1', myObj.cashback).replace('//2', myObj.storeName); } var visitHtml = '<a style="margin-left: 2px;" class="button" href="' + landingLink + '" target="_blank" onClick="closePopup()"><span>' + 'Nein, ohne Cashback weiter zum Shop' + '</span></a>'; var newVisitHtml = '<a href="' + landingLink + '" target="_blank" onClick="closePopup()">Nein, ohne Cashback weiter zum Shop' + '</a>'; var currurl = window.location.pathname; var index = currurl.lastIndexOf("/") + 1; var filename = currurl.substr(index); var backStoreHtml = '<br/><br/><br/><p><a href="' + storeDetailLink + '" > Zurück CashbackDeals.de</a></p>'; $('.backlink').html(visitHtml + backStoreHtml); $('.popup-back-right').html('<img src="'+imageUrl+'" width="16" height="16" alt="-----" title="" />'); if (typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9'){ $('.popup-back-left').html(''); $('.popup-back-right').html(''); } else{ $('.popup-back-left').html('<a href="' + storeDetailLink + '" > Zurück CashbackDeals.de</a>'); $.ajax({ url: '/ajax/get_store_checks.php', data: 'url_key=' + myObj.urlKey , type: 'POST', success: function (resp) { var data = JSON.parse(resp); show_goto_store_link = data.show_goto_store_link ; // console.log('show_goto_store_link:'+show_goto_store_link); if(show_goto_store_link=='1'){ // console.log('yes show_goto_store_link'); $('.popup-back-right').html(newVisitHtml); } else if (typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9'){ $('.popup-back-right').html(''); } else{ // console.log('not how show_goto_store_link'); $('.popup-back-right').html(''); } } }); } // if(show_goto_store_link=='1'){ //$('.popup-back-right').html(newVisitHtml); // } ///////////Start hide Show Go to Store Link code show_goto_store_link //////////// ///////////End hide Show Go to Store Link code show_goto_store_link //////////// $('#reg_main_title').html(htm); if (filename == 'dailydeals-service.php') $('.ReturnUrl').val(landingLink); else $('.ReturnUrl').val(storeDetailLink); visitHtml + backStoreHtml loadPopup('.various', '900', '664'); } function loginFancyPopUP(myObj) { hideNewDeals(); if (myObj.itemType == 'product') { $('#store_cashback_range').html(myObj.cashback); $('.shop-detail-rating').css('display', 'none'); $('#extra_conditions').css('display', 'none'); if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0) var landingLink = '/product/visit/' + myObj.itemId; $('a#store_visit_link').attr('href', landingLink); $('#store_detail_link').attr('href', '/product/' + myObj.urlKey+'.php'); } else if (myObj.itemType == 'pfproduct') { $('#store_cashback_range').html(myObj.cashback); $('.shop-detail-rating').css('display', 'none'); $('#extra_conditions').css('display', 'none'); if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0) var landingLink = '/pfproduct/visit/' + myObj.itemId; $('a#store_visit_link').attr('href', landingLink); $('#store_detail_link').attr('href', '/pfproduct/' + myObj.urlKey+'.php'); } else { var storeDetailLink = null; if (myObj.itemType == 'voucher' && typeof myObj.voucher_url_key !== 'undefined') { storeDetailLink = '/kortingsactie/'+ myObj.urlKey +'/'+ myObj.voucher_url_key; } else { storeDetailLink = '/cashback/'+myObj.urlKey+'.php'; } var landingLink = '/popup/visit.php?url_key='+myObj.urlKey; if(typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9' ){ // alert('hello'); landingLink += '&cultureid='+myObj.cultureid; var pasUrl = "url_key=" + myObj.urlKey + "&cultureid=" + myObj.cultureid; } else{ var pasUrl = "url_key=" + myObj.urlKey; } if (myObj.channel && myObj.channel === "FBC") { landingLink += '&channel=FBC'; } else if (myObj.channel && myObj.channel === "TOB") { landingLink += '&channel=TOB'; } if (typeof myObj.itemType !== "undefined" && (myObj.itemType == 'dailydeal' || myObj.itemType == 'dagdeal' || myObj.itemType == 'holidaydeal')) { landingLink += '&type='+myObj.itemType+'&typeId='+myObj.itemId; } else if (typeof myObj.itemId !== "undefined" && myObj.itemId != 0) { landingLink += '&type=voucher&typeId='+myObj.itemId; } //Only for website banners if (typeof myObj.bannerId !== "undefined" && myObj.bannerId != 0) { if (myObj.channel && myObj.channel === "TOB") { landingLink += '&toBannerId='+myObj.bannerId; } else { landingLink += '&bannerId='+myObj.bannerId; } } //for blogs if (typeof myObj.blogId !== "undefined" && myObj.blogId != 0) { landingLink += '&blogId=' + myObj.blogId; } //End Only for website banners if (typeof myObj.themeId !== "undefined" && myObj.themeId != 0) landingLink += '&themeId='+myObj.themeId; $('#storeVoucherBox').hide(); // hide any previously shown voucher code box if (typeof myObj.itemId !== "undefined" && typeof myObj.code !== "undefined" && myObj.code != '') { $('#storeVoucherCode').html(myObj.code); $('#storeVoucherBox').show(); } $.ajax({ url: '/ajax/get_store_detail.php', data: pasUrl, type: 'POST', success: function (resp) { var obj = JSON.parse(resp); var min = obj.cashback_range.min; var max = obj.cashback_range.max; if (min != null) { if (37 == '77' || 37 == '91' || 37 == '133' || 37 == '132') { min = parseFloat(min).toFixed(2); max = parseFloat(max).toFixed(2); } else { min = parseFloat(min).toFixed(2).replace('.', ','); max = parseFloat(max).toFixed(2).replace('.', ','); } } $('#dealsNew').empty(); if(typeof(obj.deals) !="udefined" && obj.deals != null){ var lbl_popup_deal_select = "Auswählen"; obj.deals.forEach(function(item){ $('#dealsNew').append('<div class="popup-row"> <div class="popup-deal-logo"> <img src="'+item.voucher_image+'"></div> <div class="popup-deal-store">'+item.name+'</div> <div class="popup-deal-save">'+item.txt_cashback+'</div> <div class="popup-deal-btn"><a href="/cashback/'+item.url_key+'.php">'+lbl_popup_deal_select+'</a></div></div>'); }); } if (typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9'){ var type = obj.cashback_range.cashback_type; if (type == 'percent') type = "%"; else if (type == 'points') type = 'Punkt(e)'; else type = ''; var cashback = obj.cashback_range.cashback; if (37 == '77' || 37 == '91' || 37 == '133' || 37 == '132') { cashback = parseFloat(cashback).toFixed(2); } else { cashback = parseFloat(cashback).toFixed(2).replace('.', ','); } // alert(type); //alert(cashback + type); $('#store_cashback_range').html(cashback + type); } else{ var type = obj.cashback_range.type; if (type == 'percent') type = "%"; else if (type == 'points') type = 'Punkt(e)'; else type = ''; if (min == null) $('#store_cashback_range').html('0,00'); else if (min == max) $('#store_cashback_range').html(min + type); else $('#store_cashback_range').html(min + ' - ' + max + type + ' <a href="' + storeDetailLink + '" class="info_store_deals"><img src="https://static.orangebuddies.nl/templates/www.cashbackdeals.de/march16/assets/info_icon.png" width="30" height="30" style="vertical-align:top;" border="0" alt="" /></a>'); } var rating_imgurl = $('#popup_rating_imgurl').val(); $('#popup_rating_img').attr('src', rating_imgurl + obj.store_reviews.rating + '.png'); $('#popup_total_reviews').html(obj.store_reviews.total_reviews); var extra_info = obj.store_info.cashback_tc; var lbl_extra_conditions_info = 'Ja, <a href="//1" onclick="closeFB()">klicke hier</a>'; if (extra_info == false) $('#extra_conditions').html('Nein'); else $('#extra_conditions').html(lbl_extra_conditions_info.replace('//1', storeDetailLink + '#additional_conditions')) } }); $('a#store_visit_link').attr('href', landingLink); if(typeof myObj.cultureid !== "undefined" && myObj.cultureid != 0 && myObj.cultureid != '9' ){ $('#store_detail_link').hide(); } else{ $('#store_detail_link').show(); $('#store_detail_link').attr('href', storeDetailLink); } } // already visited store script var vistedKeys = []; vistedKeys.push("saturn-handytarife-de"); vistedKeys.push("aboalarm-de"); vistedKeys.push("urlaub-de"); if((jQuery.inArray( myObj.urlKey,vistedKeys) >= 0 || jQuery.inArray( myObj.urlKey,keyGlobal) >= 0)){ var store_short_desc = '<i class="fa fa-check-circle"></i>Wir haben deinen Besuch bei %STORENAME% registriert.'; }else{ var store_short_desc = 'Deine Bestellung bei //store_name wird nun registriert'; } $('#store_visit_link').attr('onclick','setPopupTitle("'+myObj.storeName+'","'+myObj.urlKey+'");'); // already visited store script end $('.heading').html(store_short_desc.replace("//store_name", '<span>' + myObj.storeName + '</span>').replace("%STORENAME%", '<span>' + myObj.storeName + '</span>')); $('.alert-msg').html($('#store_full_desc').val().replace("//store_name", myObj.storeName)); var lbl_visit_store_btn = "Zu //1"; $('#store_visit_text').html(lbl_visit_store_btn.replace("//1", myObj.storeName)); $('#store_imgurl').attr('src', myObj.imgUrl); checkPCSettings(); loadPopup('.various', '900', '664'); } function showNewDeals(){ $('.popup-deals').show(); $('.popup-info').hide(); $('.popup-advice').hide(); $('.alert-msg').hide(); $('#storeVoucherBox').hide(); $('.popup-button').hide(); $('.popup-back').hide(); } function hideNewDeals(){ $('#dealsNew').empty(); $('.popup-deals').hide(); $('.popup-info').show(); $('.popup-advice').show(); $('.alert-msg').show(); $('#storeVoucherBox').show(); $('.popup-button').show(); $('.popup-back').show();


<li>
  <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out">
	Sign out
  </a>
</li>
</ul>
</div>
</footer>

<script crossorigin="anonymous" async="async" integrity="sha512-+izPSyHTdT2AVPhc67yV3qmann6eeN29nDDv2mavIpa51L/ydhqycmLaPyd7u97KBPc414KLsvTOstyxl0mIBQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/mobile-57884b97504ac6738f973dae94e0509e.js"></script>

</body>
</html><
module.exports = config;