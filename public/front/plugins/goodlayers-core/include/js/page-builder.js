!(function (e) {
  "use strict";
  var t = "desktop";
  "function" == typeof window.matchMedia
    ? (e(window).on("resize realfactory-set-display", function () {
        t = window.matchMedia("(max-width: 419px)").matches
          ? "mobile-portrait"
          : window.matchMedia("(max-width: 767px)").matches
          ? "mobile-landscape"
          : window.matchMedia("(max-width: 959px)").matches
          ? "tablet"
          : "desktop";
      }),
      e(window).trigger("realfactory-set-display"))
    : (e(window).on("resize realfactory-set-display", function () {
        t =
          e(window).innerWidth() <= 419
            ? "mobile-portrait"
            : e(window).innerWidth() <= 767
            ? "mobile-landscape"
            : e(window).innerWidth() <= 959
            ? "tablet"
            : "desktop";
      }),
      e(window).trigger("realfactory-set-display"));
  var i = function (e) {
    0 != e.length &&
      ((this.main_menu = e),
      (this.slide_bar = this.main_menu.children(
        ".realfactory-navigation-slide-bar"
      )),
      (this.slide_bar_val = { width: 0, left: 0 }),
      (this.slide_bar_offset = "15"),
      (this.current_menu = this.main_menu
        .children(".sf-menu")
        .children(".current-menu-item, .current-menu-ancestor")
        .children("a")),
      this.init());
  };
  (i.prototype = {
    init: function () {
      var t,
        i,
        n,
        a = this;
      a.sf_menu_mod(),
        "function" == typeof e.fn.superfish &&
          (a.main_menu.superfish({ delay: 400, speed: "fast" }),
          a.sf_menu_position(),
          e(window).resize(
            ((t = function () {
              a.sf_menu_position();
            }),
            (i = 300),
            function () {
              var e = this,
                a = arguments;
              n && clearTimeout(n),
                (n = setTimeout(function () {
                  t.apply(e, a), (n = null);
                }, i));
            })
          )),
        a.slide_bar.length > 0 && a.init_slidebar();
    },
    sf_menu_mod: function () {
      this.main_menu.find(".sf-mega > ul").each(function () {
        var t = e("<div></div>"),
          i = e('<div class="sf-mega-section-wrap" ></div>'),
          n = 0;
        e(this)
          .children("li")
          .each(function () {
            var a = parseInt(e(this).attr("data-size"));
            n + a <= 60
              ? (n += a)
              : ((n = a),
                t.append(i),
                (i = e('<div class="sf-mega-section-wrap" ></div>'))),
              i.append(
                e('<div class="sf-mega-section" ></div>')
                  .addClass("realfactory-column-" + a)
                  .html(
                    e('<div class="sf-mega-section-inner" ></div>')
                      .addClass(e(this).attr("class"))
                      .attr("id", e(this).attr("id"))
                      .html(e(this).html())
                  )
              );
          }),
          t.append(i),
          e(this).replaceWith(t.html());
      });
    },
    sf_menu_position: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var i = this.main_menu.find(
          ".sf-menu > li.realfactory-normal-menu .sub-menu"
        );
        i.css({ display: "block" }).removeClass("sub-menu-right"),
          i.each(function () {
            e(this).offset().left + e(this).width() > e(window).width() &&
              e(this).addClass("sub-menu-right");
          }),
          i.css({ display: "none" }),
          this.main_menu
            .find(".sf-menu > li.realfactory-mega-menu .sf-mega")
            .each(function () {
              e(this).hasClass("sf-mega-full") ||
                (e(this).css({ display: "block" }),
                e(this).css({
                  right: "",
                  "margin-left":
                    -(e(this).width() - e(this).parent().outerWidth()) / 2,
                }),
                e(this).offset().left + e(this).width() > e(window).width() &&
                  e(this).css({ right: 0, "margin-left": "" }),
                e(this).css({ display: "none" }));
            });
      }
    },
    init_slidebar: function () {
      var t = this;
      t.init_slidebar_pos(),
        e(window).load(function () {
          t.init_slidebar_pos();
        }),
        t.main_menu
          .children(".sf-menu")
          .children("li")
          .hover(
            function () {
              var i = e(this).children("a");
              i.length > 0 &&
                t.slide_bar.animate(
                  {
                    width: i.outerWidth() + 2 * t.slide_bar_offset,
                    left: i.position().left - t.slide_bar_offset,
                  },
                  { queue: !1, duration: 250 }
                );
            },
            function () {
              t.slide_bar.animate(
                { width: t.slide_bar_val.width, left: t.slide_bar_val.left },
                { queue: !1, duration: 250 }
              );
            }
          ),
        e(window).on("resize", function () {
          t.init_slidebar_pos();
        }),
        e(window).on("realfactory-navigation-slider-bar-init", function () {
          (t.current_menu = t.main_menu
            .children(".sf-menu")
            .children(".current-menu-item, .current-menu-ancestor")
            .children("a")),
            t.animate_slidebar_pos();
        }),
        e(window).on("realfactory-navigation-slider-bar-animate", function () {
          t.animate_slidebar_pos();
        });
    },
    init_slidebar_pos: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var e = this;
        e.current_menu.length > 0
          ? (e.slide_bar_val = {
              width: e.current_menu.outerWidth() + 2 * e.slide_bar_offset,
              left: e.current_menu.position().left - e.slide_bar_offset,
            })
          : (e.slide_bar_val = {
              width: 0,
              left: e.main_menu
                .children("ul")
                .children("li:first-child")
                .position().left,
            }),
          e.slide_bar.css({
            width: e.slide_bar_val.width,
            left: e.slide_bar_val.left,
            display: "block",
          });
      }
    },
    animate_slidebar_pos: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var e = this;
        e.current_menu.length > 0
          ? (e.slide_bar_val = {
              width: e.current_menu.outerWidth() + 2 * e.slide_bar_offset,
              left: e.current_menu.position().left - e.slide_bar_offset,
            })
          : (e.slide_bar_val = {
              width: 0,
              left: e.main_menu
                .children("ul")
                .children("li:first-child")
                .position().left,
            }),
          e.slide_bar.animate(
            { width: e.slide_bar_val.width, left: e.slide_bar_val.left },
            { queue: !1, duration: 250 }
          );
      }
    },
  }),
    (e.fn.realfactory_mobile_menu = function (t) {
      var i = e(this).siblings(".realfactory-mm-menu-button"),
        n = {
          navbar: { title: '<span class="mmenu-custom-close" ></span>' },
          extensions: ["pagedim-black"],
        };
      if (
        (e(this)
          .find('a[href="#"]')
          .each(function () {
            var t = e(this).html();
            e('<span class="realfactory-mm-menu-blank" ></span>')
              .html(t)
              .insertBefore(e(this)),
              e(this).remove();
          }),
        e(this).attr("data-slide"))
      ) {
        var a = "realfactory-mmenu-" + e(this).attr("data-slide");
        e("html").addClass(a),
          (n.offCanvas = { position: e(this).attr("data-slide") });
      }
      e(this).mmenu(n, {
        offCanvas: { pageNodetype: ".realfactory-body-outer-wrapper" },
      });
      var r = e(this).data("mmenu");
      e(this)
        .find("a")
        .not(".mm-next, .mm-prev")
        .on("click", function () {
          r.close();
        }),
        e(this)
          .find(".mmenu-custom-close")
          .on("click", function () {
            r.close();
          }),
        r.bind("open", function (e) {
          i.addClass("realfactory-active");
        }),
        r.bind("close", function (e) {
          i.removeClass("realfactory-active");
        });
    });
  var n = function (e) {
    (this.menu = e),
      (this.menu_button = e.children(".realfactory-overlay-menu-icon")),
      (this.menu_content = e.children(".realfactory-overlay-menu-content")),
      (this.menu_close = this.menu_content.children(
        ".realfactory-overlay-menu-close"
      )),
      this.init();
  };
  n.prototype = {
    init: function () {
      var t = this,
        i = 0;
      t.menu_content.appendTo("body"),
        t.menu_content.find("ul.menu > li").each(function () {
          e(this).css("transition-delay", 150 * i + "ms"), i++;
        }),
        t.menu_button.on("click", function () {
          return (
            e(this).addClass("realfactory-active"),
            t.menu_content.fadeIn(200, function () {
              e(this).addClass("realfactory-active");
            }),
            !1
          );
        }),
        t.menu_close.on("click", function () {
          return (
            t.menu_button.removeClass("realfactory-active"),
            t.menu_content.fadeOut(400, function () {
              e(this).removeClass("realfactory-active");
            }),
            t.menu_content
              .find(".sub-menu")
              .slideUp(200)
              .removeClass("realfactory-active"),
            !1
          );
        }),
        t.menu_content.find("a").on("click", function (i) {
          var n = e(this).siblings(".sub-menu");
          if (n.length > 0) {
            if (!n.hasClass("realfactory-active")) {
              var a = n
                .closest("li")
                .siblings()
                .find(".sub-menu.realfactory-active");
              return (
                a.length > 0
                  ? (a.removeClass("realfactory-active").slideUp(150),
                    n
                      .delay(150)
                      .slideDown(400, "easeOutQuart")
                      .addClass("realfactory-active"))
                  : n
                      .slideDown(400, "easeOutQuart")
                      .addClass("realfactory-active"),
                e(this).addClass("realfactory-no-preload"),
                !1
              );
            }
            e(this).removeClass("realfactory-no-preload");
          } else t.menu_close.trigger("click");
        });
    },
  };
  var a = function (e) {
    0 != e.length &&
      ((this.prev_scroll = 0),
      (this.side_nav = e),
      (this.side_nav_content = e.children()),
      this.init());
  };
  a.prototype = {
    init: function () {
      var i = this;
      i.init_nav_bar_element(),
        e(window).resize(function () {
          i.init_nav_bar_element();
        }),
        e(window).scroll(function () {
          if (
            "mobile-landscape" != t &&
            "mobile-portrait" != t &&
            "tablet" != t &&
            i.side_nav.hasClass("realfactory-allow-slide")
          ) {
            var n = parseInt(e("html").css("margin-top")),
              a = e(window).scrollTop() > i.prev_scroll;
            if (((i.prev_scroll = e(window).scrollTop()), a))
              i.side_nav.hasClass("realfactory-fix-bottom") ||
                (i.side_nav.hasClass("realfactory-fix-top")
                  ? (i.side_nav.css("top", i.side_nav.offset().top),
                    i.side_nav.removeClass("realfactory-fix-top"))
                  : e(window).height() + e(window).scrollTop() >
                      i.side_nav_content.offset().top +
                        i.side_nav_content.outerHeight() &&
                    (i.side_nav.hasClass("realfactory-fix-bottom") ||
                      (i.side_nav.addClass("realfactory-fix-bottom"),
                      i.side_nav.css("top", ""))));
            else if (!i.side_nav.hasClass("realfactory-fix-top"))
              if (i.side_nav.hasClass("realfactory-fix-bottom")) {
                var r =
                  e(window).scrollTop() +
                  (e(window).height() - n) -
                  i.side_nav_content.outerHeight();
                i.side_nav.css("top", r),
                  i.side_nav.removeClass("realfactory-fix-bottom");
              } else
                e(window).scrollTop() + n < i.side_nav_content.offset().top &&
                  (i.side_nav.hasClass("realfactory-fix-top") ||
                    (i.side_nav.addClass("realfactory-fix-top"),
                    i.side_nav.css("top", "")));
          }
        });
    },
    init_nav_bar_element: function () {
      if ("mobile-landscape" != t && "mobile-portrait" != t && "tablet" != t) {
        var i = this,
          n = i.side_nav_content
            .children(".realfactory-pos-middle")
            .addClass("realfactory-active"),
          a = i.side_nav_content
            .children(".realfactory-pos-bottom")
            .addClass("realfactory-active");
        i.side_nav_content.children(".realfactory-pre-spaces").remove(),
          e(window).height() < i.side_nav_content.height()
            ? i.side_nav.addClass("realfactory-allow-slide")
            : (i.side_nav
                .removeClass(
                  "realfactory-allow-slide realfactory-fix-top realfactory-fix-bottom"
                )
                .css("top", ""),
              i.side_nav.hasClass("realfactory-style-middle") &&
                n.each(function () {
                  var t = parseInt(e(this).css("padding-top")),
                    n =
                      (i.side_nav.height() -
                        (i.side_nav_content.height() - t)) /
                        2 -
                      t;
                  n > 0 &&
                    e('<div class="realfactory-pre-spaces" ></div>')
                      .css("height", n)
                      .insertBefore(e(this));
                }),
              a.each(function () {
                var t = i.side_nav.height() - i.side_nav_content.height();
                t > 0 &&
                  e('<div class="realfactory-pre-spaces" ></div>')
                    .css("height", t)
                    .insertBefore(e(this));
              }));
      }
    },
  };
  var r = function () {
    (this.anchor_link = e('a[href^="#"]')
      .not('[href="#"]')
      .filter(function () {
        return !(
          e(this).is(
            ".realfactory-mm-menu-button, .mm-next, .mm-prev, .mm-title"
          ) ||
          e(this).is(".fbx-btn-transition") ||
          e(this).parent(".description_tab, .reviews_tab").length ||
          e(this).closest(".woocommerce").length
        );
      })),
      this.anchor_link.length &&
        ((this.menu_anchor = e(
          "#realfactory-main-menu, #realfactory-bullet-anchor"
        )),
        (this.home_anchor = this.menu_anchor.find(
          "ul.sf-menu > li.current-menu-item > a, ul.sf-menu > li.current-menu-ancestor > a, .realfactory-bullet-anchor-link.current-menu-item"
        )),
        this.init());
  };
  r.prototype = {
    init: function () {
      var t = this;
      t.animate_anchor(),
        t.scroll_section(),
        t.menu_anchor.filter("#realfactory-bullet-anchor").each(function () {
          e(this)
            .css("margin-top", -t.menu_anchor.height() / 2)
            .addClass("realfactory-init");
        });
      var i = window.location.hash;
      i &&
        setTimeout(function () {
          var n = t.menu_anchor.find('a[href*="' + i + '"]');
          n.is(".current-menu-item, .current-menu-ancestor") ||
            (n
              .addClass("current-menu-item")
              .siblings()
              .removeClass("current-menu-item current-menu-ancestor"),
            e(window).trigger("realfactory-navigation-slider-bar-init")),
            t.scroll_to(i, !1, 300);
        }, 500);
    },
    animate_anchor: function () {
      var t = this;
      t.home_anchor.on("click", function () {
        if (window.location.href == this.href)
          return (
            e("html, body").animate(
              { scrollTop: 0 },
              { duration: 1500, easing: "easeOutQuart" }
            ),
            !1
          );
      }),
        t.anchor_link.on("click", function () {
          if (
            location.hostname == this.hostname &&
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "")
          )
            return t.scroll_to(this.hash, !0);
        });
    },
    scroll_to: function (t, i, n) {
      if ("#realfactory-top-anchor" == t) var a = 0;
      else {
        var r = e(t);
        r.length && (a = r.offset().top);
      }
      return void 0 !== a
        ? ((a -= parseInt(e("html").css("margin-top"))),
          void 0 !== window.realfactory_anchor_offset &&
            (a -= parseInt(window.realfactory_anchor_offset)),
          a < 0 && (a = 0),
          e("html, body").animate(
            { scrollTop: a },
            { duration: 1500, easing: "easeOutQuart", queue: !1 }
          ),
          !1)
        : i
        ? (window.location.replace(realfactory_script_core.home_url + t), !1)
        : void 0;
    },
    scroll_section: function () {
      var i = this,
        n = this.menu_anchor.find('a[href*="#"]').not('[href="#"]');
      if (n.length) {
        var a = e("#realfactory-page-wrapper"),
          r = a.find("div[id], section[id]");
        r.length &&
          (n.each(function () {
            e(this.hash).length && e(this).attr("data-anchor", this.hash);
          }),
          e(window).scroll(function () {
            if (
              "mobile-landscape" != t &&
              "mobile-portrait" != t &&
              "tablet" != t
            )
              if (
                i.home_anchor.length &&
                e(window).scrollTop() < a.offset().top
              )
                i.home_anchor.each(function () {
                  e(this).hasClass("realfactory-bullet-anchor-link")
                    ? (e(this)
                        .addClass("current-menu-item")
                        .siblings()
                        .removeClass("current-menu-item"),
                      e(this)
                        .parent(".realfactory-bullet-anchor")
                        .attr("data-anchor-section", "realfactory-home"))
                    : e(this).parent(
                        ".current-menu-item, .current-menu-ancestor"
                      ).length ||
                      (e(this)
                        .parent()
                        .addClass("current-menu-item")
                        .siblings()
                        .removeClass("current-menu-item current-menu-ancestor"),
                      e(window).trigger(
                        "realfactory-navigation-slider-bar-init"
                      ));
                });
              else {
                var o = e(window).scrollTop() + e(window).height() / 2;
                r.each(function () {
                  var t = e(this).offset().top;
                  if (o > t && o < t + e(this).outerHeight()) {
                    var i = e(this).attr("id");
                    return (
                      n.filter('[data-anchor="#' + i + '"]').each(function () {
                        e(this).hasClass("realfactory-bullet-anchor-link")
                          ? (e(this)
                              .addClass("current-menu-item")
                              .siblings()
                              .removeClass("current-menu-item"),
                            e(this)
                              .parent(".realfactory-bullet-anchor")
                              .attr("data-anchor-section", i))
                          : e(this).parent("li.menu-item").length &&
                            !e(this)
                              .parent("li.menu-item")
                              .is(
                                ".current-menu-item, .current-menu-ancestor"
                              ) &&
                            (e(this)
                              .parent("li.menu-item")
                              .addClass("current-menu-item")
                              .siblings()
                              .removeClass(
                                "current-menu-item current-menu-ancestor"
                              ),
                            e(window).trigger(
                              "realfactory-navigation-slider-bar-init"
                            ));
                      }),
                      !1
                    );
                  }
                });
              }
          }));
      }
    },
  };
  var o = function () {
    (this.sticky_nav = e(
      ".realfactory-with-sticky-navigation .realfactory-sticky-navigation"
    )),
      (this.sticky_nav_logo = this.sticky_nav.find(
        ".realfactory-logo-inner img"
      )),
      (this.logo_height = 35),
      this.sticky_nav.length &&
        ((this.mobile_menu = e("#realfactory-mobile-header")), this.init());
  };
  o.prototype = {
    init: function () {
      var t = this;
      t.sticky_nav.hasClass("realfactory-style-fixed")
        ? t.style_fixed()
        : t.sticky_nav.hasClass("realfactory-style-slide") && t.style_slide(),
        t.style_mobile_slide(),
        t.sticky_nav.hasClass("realfactory-sticky-navigation-height")
          ? ((window.realfactory_anchor_offset = t.sticky_nav.outerHeight()),
            e(window).resize(function () {
              window.realfactory_anchor_offset = t.sticky_nav.outerHeight();
            }))
          : (window.realfactory_anchor_offset = 75),
        e(window).trigger("realfactory-set-sticky-navigation"),
        e(window).trigger("realfactory-set-sticky-mobile-navigation");
    },
    style_fixed: function () {
      var i = this,
        n = e('<div class="realfactory-sticky-menu-placeholder" ></div>');
      e(window).on("scroll realfactory-set-sticky-navigation", function () {
        if (
          "mobile-landscape" != t &&
          "mobile-portrait" != t &&
          "tablet" != t
        ) {
          var a = parseInt(e("html").css("margin-top"));
          if (i.sticky_nav.hasClass("realfactory-fixed-navigation"))
            e(window).scrollTop() + a <= n.offset().top &&
              (i.sticky_nav.hasClass("realfactory-without-placeholder") ||
                i.sticky_nav.height(n.height()),
              i.sticky_nav.insertBefore(n),
              i.sticky_nav.removeClass("realfactory-fixed-navigation"),
              n.remove(),
              i.sticky_nav_logo.css({
                "padding-top": "",
                "padding-bottom": "",
              }),
              setTimeout(function () {
                i.sticky_nav.removeClass(
                  "realfactory-animate-fixed-navigation realfactory-animate-logo-height"
                );
              }, 10),
              setTimeout(function () {
                i.sticky_nav.css("height", ""),
                  i.sticky_nav_logo.css({ height: "", width: "" }),
                  e(window).trigger(
                    "realfactory-navigation-slider-bar-animate"
                  );
              }, 200));
          else if (e(window).scrollTop() + a > i.sticky_nav.offset().top) {
            i.sticky_nav.hasClass("realfactory-without-placeholder") ||
              n.height(i.sticky_nav.outerHeight()),
              n.insertAfter(i.sticky_nav),
              e("body").append(i.sticky_nav),
              i.sticky_nav.addClass("realfactory-fixed-navigation");
            var r = (i.logo_height - i.sticky_nav_logo.height()) / 2;
            r > 0
              ? i.sticky_nav_logo.css({ "padding-top": r, "padding-bottom": r })
              : (i.sticky_nav_logo.css({
                  height: i.sticky_nav_logo.height(),
                  width: "auto",
                }),
                i.sticky_nav.addClass("realfactory-animate-logo-height")),
              setTimeout(function () {
                i.sticky_nav.addClass("realfactory-animate-fixed-navigation");
              }, 10),
              setTimeout(function () {
                i.sticky_nav.css("height", ""),
                  e(window).trigger(
                    "realfactory-navigation-slider-bar-animate"
                  );
              }, 200);
          }
        }
      });
    },
    style_slide: function () {
      var i = this,
        n = e('<div class="realfactory-sticky-menu-placeholder" ></div>');
      e(window).on("scroll realfactory-set-sticky-navigation", function () {
        if (
          "mobile-landscape" != t &&
          "mobile-portrait" != t &&
          "tablet" != t
        ) {
          var a = parseInt(e("html").css("margin-top"));
          if (i.sticky_nav.hasClass("realfactory-fixed-navigation")) {
            if (
              e(window).scrollTop() + a <=
              n.offset().top + n.height() + 200
            ) {
              var r = i.sticky_nav.clone();
              r.insertAfter(i.sticky_nav),
                r.slideUp(200, function () {
                  e(this).remove();
                }),
                i.sticky_nav.insertBefore(n),
                i.sticky_nav_logo.css({
                  "padding-top": "",
                  "padding-bottom": "",
                }),
                n.remove(),
                i.sticky_nav.removeClass(
                  "realfactory-fixed-navigation realfactory-animate-fixed-navigation"
                ),
                i.sticky_nav.css("display", "block"),
                e(window).trigger("realfactory-navigation-slider-bar-animate");
            }
          } else if (
            e(window).scrollTop() + a >
            i.sticky_nav.offset().top + i.sticky_nav.outerHeight() + 200
          ) {
            var o = (i.logo_height - i.sticky_nav_logo.height()) / 2;
            i.sticky_nav.hasClass("realfactory-without-placeholder") ||
              n.height(i.sticky_nav.outerHeight()),
              n.insertAfter(i.sticky_nav),
              i.sticky_nav.css("display", "none"),
              o > 0 &&
                i.sticky_nav_logo.css({
                  "padding-top": o,
                  "padding-bottom": o,
                }),
              e("body").append(i.sticky_nav),
              i.sticky_nav.addClass(
                "realfactory-fixed-navigation realfactory-animate-fixed-navigation"
              ),
              i.sticky_nav.slideDown(200),
              e(window).trigger("realfactory-navigation-slider-bar-animate");
          }
        }
      });
    },
    style_mobile_slide: function () {
      var i = this,
        n = e('<div class="realfactory-sticky-mobile-placeholder" ></div>');
      e(window).on(
        "scroll realfactory-set-sticky-mobile-navigation",
        function () {
          if (
            "mobile-landscape" == t ||
            "mobile-portrait" == t ||
            "tablet" == t
          ) {
            var a = parseInt(e("html").css("margin-top"));
            if (i.mobile_menu.hasClass("realfactory-fixed-navigation")) {
              if (
                e(window).scrollTop() + a <=
                n.offset().top + n.height() + 200
              ) {
                var r = i.mobile_menu.clone();
                r.insertAfter(i.mobile_menu),
                  r.slideUp(200, function () {
                    e(this).remove();
                  }),
                  i.mobile_menu.insertBefore(n),
                  n.remove(),
                  i.mobile_menu.removeClass("realfactory-fixed-navigation"),
                  i.mobile_menu.css("display", "block");
              }
            } else
              e(window).scrollTop() + a >
                i.mobile_menu.offset().top +
                  i.mobile_menu.outerHeight() +
                  200 &&
                (n
                  .height(i.mobile_menu.outerHeight())
                  .insertAfter(i.mobile_menu),
                e("body").append(i.mobile_menu),
                i.mobile_menu.addClass("realfactory-fixed-navigation"),
                i.mobile_menu.css("display", "none").slideDown(200));
          }
        }
      );
    },
  };
  var s = function () {
    (this.heading_font = e("h1, h2, h3, h4, h5, h6")), this.init();
  };
  (s.prototype = {
    init: function () {
      var t,
        i,
        n = this;
      n.resize(),
        e(window).on(
          "resize",
          ((t = function () {
            n.resize();
          }),
          100,
          function () {
            var e = this,
              n = arguments;
            i ||
              (i = setTimeout(function () {
                t.apply(e, n), (i = null);
              }, 100));
          })
        );
    },
    resize: function () {
      "mobile-landscape" == t || "mobile-portrait" == t
        ? this.heading_font.each(function () {
            parseInt(e(this).css("font-size")) > 40 &&
              (e(this).attr("data-orig-font") ||
                e(this).attr("data-orig-font", e(this).css("font-size")),
              e(this).css("font-size", "40px"));
          })
        : this.heading_font.filter("[data-orig-font]").each(function () {
            e(this).css("font-size", e(this).attr("data-orig-font"));
          });
    },
  }),
    e(document).ready(function () {
      new s(),
        e(
          "#realfactory-main-menu, #realfactory-right-menu, #realfactory-mobile-menu"
        ).each(function () {
          e(this).hasClass("realfactory-overlay-menu")
            ? new n(e(this))
            : e(this).hasClass("realfactory-mm-menu-wrap")
            ? e(this).realfactory_mobile_menu()
            : new i(e(this));
        }),
        e("#realfactory-top-search, #realfactory-mobile-top-search").each(
          function () {
            var t = e(this).siblings(".realfactory-top-search-wrap");
            t.appendTo("body"),
              e(this).on("click", function () {
                t.fadeIn(200, function () {
                  e(this).addClass("realfactory-active");
                });
              }),
              t.find(".realfactory-top-search-close").on("click", function () {
                t.fadeOut(200, function () {
                  e(this).addClass("realfactory-active");
                });
              }),
              t.find(".search-submit").on("click", function () {
                if (0 == t.find(".search-field").val().length) return !1;
              });
          }
        ),
        e("#realfactory-main-menu-cart, #realfactory-mobile-menu-cart").each(
          function () {
            e(this).hover(
              function () {
                e(this).addClass("realfactory-active realfactory-animating");
              },
              function () {
                var t = e(this);
                t.removeClass("realfactory-active"),
                  setTimeout(function () {
                    t.removeClass("realfactory-animating");
                  }, 400);
              }
            );
          }
        ),
        e(
          ".realfactory-header-boxed-wrap, .realfactory-header-background-transparent, .realfactory-navigation-bar-wrap.realfactory-style-transparent"
        ).each(function () {
          var t = e(this),
            i = e(".realfactory-header-transparent-substitute");
          i.height(t.outerHeight()),
            e(window).on("load resize", function () {
              i.height(t.outerHeight());
            });
        }),
        e("body.error404, body.search-no-results").each(function () {
          var t = e(this).find("#realfactory-full-no-header-wrap"),
            i = parseInt(
              e(this)
                .children(".realfactory-body-outer-wrapper")
                .children(".realfactory-body-wrapper")
                .css("margin-bottom")
            ),
            n = (e(window).height() - t.offset().top - t.outerHeight() - i) / 2;
          n > 0 && t.css({ "padding-top": n, "padding-bottom": n }),
            e(window).on("load resize", function () {
              t.css({ "padding-top": 0, "padding-bottom": 0 }),
                (n =
                  (e(window).height() - t.offset().top - t.outerHeight() - i) /
                  2) > 0 && t.css({ "padding-top": n, "padding-bottom": n });
            });
        });
      var t = e("#realfactory-footer-back-to-top-button");
      t.length &&
        e(window).on("scroll", function () {
          e(window).scrollTop() > 300
            ? t.addClass("realfactory-scrolled")
            : t.removeClass("realfactory-scrolled");
        }),
        e(".realfactory-sidebar-wrap").each(function () {
          var t = e(this),
            i = e(this)
              .children(".realfactory-sidebar-left, .realfactory-sidebar-right")
              .children(".realfactory-sidebar-area"),
            n = 0;
          i.css("min-height", ""),
            t.children().each(function () {
              e(this).outerHeight() > n && (n = e(this).outerHeight());
            }),
            i.css("min-height", n),
            e(window).on("load resize", function () {
              i.css("min-height", ""),
                t.children().each(function () {
                  e(this).outerHeight() > n && (n = e(this).outerHeight());
                }),
                i.css("min-height", n);
            });
        }),
        e("body")
          .children("#realfactory-page-preload")
          .each(function () {
            var t = e(this),
              i = parseInt(t.attr("data-animation-time"));
            e("a[href]")
              .not('[href^="#"], [target="_blank"], .gdlr-core-js, .strip')
              .on("click", function (n) {
                1 != n.which ||
                  e(this).hasClass("realfactory-no-preload") ||
                  (window.location.href != this.href &&
                    t.addClass("realfactory-out").fadeIn(i));
              }),
              e(window).load(function () {
                t.fadeOut(i);
              });
          });
    }),
    e(window).bind("pageshow", function (t) {
      t.originalEvent.persisted &&
        e("body")
          .children("#realfactory-page-preload")
          .each(function () {
            e(this).fadeOut(400);
          });
    }),
    e(window).on("beforeunload", function () {
      e("body")
        .children("#realfactory-page-preload")
        .each(function () {
          e(this).fadeOut(400);
        });
    }),
    e(window).load(function () {
      e("#realfactory-fixed-footer").each(function () {
        var t = e(this),
          i = e('<div class="realfactory-fixed-footer-placeholder" ></div>');
        i.insertBefore(t),
          i.height(t.outerHeight()),
          e(window).resize(function () {
            i.height(t.outerHeight());
          });
      }),
        new a(e("#realfactory-header-side-nav")),
        new o(),
        new r();
    });
})(jQuery),
  (function (e) {
    var t,
      i,
      n,
      a,
      r = "mmenu";
    (e[r] && e[r].version > "5.6.1") ||
      ((e[r] = function (e, t, i) {
        (this.$menu = e),
          (this._api = [
            "bind",
            "init",
            "update",
            "setSelected",
            "getInstance",
            "openPanel",
            "closePanel",
            "closeAllPanels",
          ]),
          (this.opts = t),
          (this.conf = i),
          (this.vars = {}),
          (this.cbck = {}),
          "function" == typeof this.___deprecated && this.___deprecated(),
          this._initMenu(),
          this._initAnchors();
        var n = this.$pnls.children();
        return (
          this._initAddons(),
          this.init(n),
          "function" == typeof this.___debug && this.___debug(),
          this
        );
      }),
      (e[r].version = "5.6.1"),
      (e[r].addons = {}),
      (e[r].uniqueId = 0),
      (e[r].defaults = {
        extensions: [],
        navbar: { add: !0, title: "Menu", titleLink: "panel" },
        onClick: { setSelected: !0 },
        slidingSubmenus: !0,
      }),
      (e[r].configuration = {
        classNames: {
          divider: "Divider",
          inset: "Inset",
          panel: "Panel",
          selected: "Selected",
          spacer: "Spacer",
          vertical: "Vertical",
        },
        clone: !1,
        openingInterval: 25,
        panelNodetype: "ul, ol, div",
        transitionDuration: 400,
      }),
      (e[r].prototype = {
        init: function (e) {
          (e = e.not("." + t.nopanel)),
            (e = this._initPanels(e)),
            this.trigger("init", e),
            this.trigger("update");
        },
        update: function () {
          this.trigger("update");
        },
        setSelected: function (e) {
          this.$menu
            .find("." + t.listview)
            .children()
            .removeClass(t.selected),
            e.addClass(t.selected),
            this.trigger("setSelected", e);
        },
        openPanel: function (i) {
          var n = i.parent(),
            a = this;
          if (n.hasClass(t.vertical)) {
            var o = n.parents("." + t.subopened);
            if (o.length) return void this.openPanel(o.first());
            n.addClass(t.opened),
              this.trigger("openPanel", i),
              this.trigger("openingPanel", i),
              this.trigger("openedPanel", i);
          } else {
            if (i.hasClass(t.current)) return;
            var s = this.$pnls.children("." + t.panel),
              l = s.filter("." + t.current);
            s
              .removeClass(t.highest)
              .removeClass(t.current)
              .not(i)
              .not(l)
              .not("." + t.vertical)
              .addClass(t.hidden),
              e[r].support.csstransitions || l.addClass(t.hidden),
              i.hasClass(t.opened)
                ? i
                    .nextAll("." + t.opened)
                    .addClass(t.highest)
                    .removeClass(t.opened)
                    .removeClass(t.subopened)
                : (i.addClass(t.highest), l.addClass(t.subopened)),
              i.removeClass(t.hidden).addClass(t.current),
              a.trigger("openPanel", i),
              setTimeout(function () {
                i.removeClass(t.subopened).addClass(t.opened),
                  a.trigger("openingPanel", i),
                  a.__transitionend(
                    i,
                    function () {
                      a.trigger("openedPanel", i);
                    },
                    a.conf.transitionDuration
                  );
              }, this.conf.openingInterval);
          }
        },
        closePanel: function (e) {
          var i = e.parent();
          i.hasClass(t.vertical) &&
            (i.removeClass(t.opened),
            this.trigger("closePanel", e),
            this.trigger("closingPanel", e),
            this.trigger("closedPanel", e));
        },
        closeAllPanels: function () {
          this.$menu
            .find("." + t.listview)
            .children()
            .removeClass(t.selected)
            .filter("." + t.vertical)
            .removeClass(t.opened);
          var e = this.$pnls.children("." + t.panel).first();
          this.$pnls
            .children("." + t.panel)
            .not(e)
            .removeClass(t.subopened)
            .removeClass(t.opened)
            .removeClass(t.current)
            .removeClass(t.highest)
            .addClass(t.hidden),
            this.openPanel(e);
        },
        togglePanel: function (e) {
          var i = e.parent();
          i.hasClass(t.vertical) &&
            this[i.hasClass(t.opened) ? "closePanel" : "openPanel"](e);
        },
        getInstance: function () {
          return this;
        },
        bind: function (e, t) {
          (this.cbck[e] = this.cbck[e] || []), this.cbck[e].push(t);
        },
        trigger: function () {
          var e = Array.prototype.slice.call(arguments),
            t = e.shift();
          if (this.cbck[t])
            for (var i = 0, n = this.cbck[t].length; n > i; i++)
              this.cbck[t][i].apply(this, e);
        },
        _initMenu: function () {
          this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()),
            this.conf.clone &&
              ((this.$menu = this.$menu.clone(!0)),
              this.$menu
                .add(this.$menu.find("[id]"))
                .filter("[id]")
                .each(function () {
                  e(this).attr("id", t.mm(e(this).attr("id")));
                })),
            this.$menu.contents().each(function () {
              3 == e(this)[0].nodeType && e(this).remove();
            }),
            (this.$pnls = e('<div class="' + t.panels + '" />')
              .append(this.$menu.children(this.conf.panelNodetype))
              .prependTo(this.$menu)),
            this.$menu.parent().addClass(t.wrapper);
          var i = [t.menu];
          this.opts.slidingSubmenus || i.push(t.vertical),
            (this.opts.extensions = this.opts.extensions.length
              ? "mm-" + this.opts.extensions.join(" mm-")
              : ""),
            this.opts.extensions && i.push(this.opts.extensions),
            this.$menu.addClass(i.join(" "));
        },
        _initPanels: function (n) {
          var a = this,
            r = this.__findAddBack(n, "ul, ol");
          this.__refactorClass(r, this.conf.classNames.inset, "inset").addClass(
            t.nolistview + " " + t.nopanel
          ),
            r.not("." + t.nolistview).addClass(t.listview);
          var o = this.__findAddBack(n, "." + t.listview).children();
          this.__refactorClass(o, this.conf.classNames.selected, "selected"),
            this.__refactorClass(o, this.conf.classNames.divider, "divider"),
            this.__refactorClass(o, this.conf.classNames.spacer, "spacer"),
            this.__refactorClass(
              this.__findAddBack(n, "." + this.conf.classNames.panel),
              this.conf.classNames.panel,
              "panel"
            );
          var s = e(),
            l = n
              .add(n.find("." + t.panel))
              .add(
                this.__findAddBack(n, "." + t.listview)
                  .children()
                  .children(this.conf.panelNodetype)
              )
              .not("." + t.nopanel);
          this.__refactorClass(l, this.conf.classNames.vertical, "vertical"),
            this.opts.slidingSubmenus || l.addClass(t.vertical),
            l.each(function () {
              var i = e(this),
                n = i;
              i.is("ul, ol")
                ? (i.wrap('<div class="' + t.panel + '" />'), (n = i.parent()))
                : n.addClass(t.panel);
              var r = i.attr("id");
              i.removeAttr("id"),
                n.attr("id", r || a.__getUniqueId()),
                i.hasClass(t.vertical) &&
                  (i.removeClass(a.conf.classNames.vertical),
                  n.add(n.parent()).addClass(t.vertical)),
                (s = s.add(n));
            });
          var c = e("." + t.panel, this.$menu);
          s.each(function (n) {
            var r,
              o,
              s = e(this),
              l = s.parent(),
              c = l.children("a, span").first();
            if (
              (l.is("." + t.panels) || (l.data(i.sub, s), s.data(i.parent, l)),
              l.children("." + t.next).length ||
                (l.parent().is("." + t.listview) &&
                  ((r = s.attr("id")),
                  (o = e(
                    '<a class="' +
                      t.next +
                      '" href="#' +
                      r +
                      '" data-target="#' +
                      r +
                      '" />'
                  ).insertBefore(c)),
                  c.is("span") && o.addClass(t.fullsubopen))),
              !s.children("." + t.navbar).length && !l.hasClass(t.vertical))
            ) {
              l = l.parent().is("." + t.listview)
                ? l.closest("." + t.panel)
                : (c = l
                    .closest("." + t.panel)
                    .find('a[href="#' + s.attr("id") + '"]')
                    .first()).closest("." + t.panel);
              var d = e('<div class="' + t.navbar + '" />');
              if (l.length) {
                switch (((r = l.attr("id")), a.opts.navbar.titleLink)) {
                  case "anchor":
                    _url = c.attr("href");
                    break;
                  case "panel":
                  case "parent":
                    _url = "#" + r;
                    break;
                  default:
                    _url = !1;
                }
                d
                  .append(
                    '<a class="' +
                      t.btn +
                      " " +
                      t.prev +
                      '" href="#' +
                      r +
                      '" data-target="#' +
                      r +
                      '" />'
                  )
                  .append(
                    e(
                      '<a class="' +
                        t.title +
                        '"' +
                        (_url ? ' href="' + _url + '"' : "") +
                        " />"
                    ).text(c.text())
                  )
                  .prependTo(s),
                  a.opts.navbar.add && s.addClass(t.hasnavbar);
              } else
                a.opts.navbar.title &&
                  (d
                    .append(
                      '<a class="' +
                        t.title +
                        '">' +
                        a.opts.navbar.title +
                        "</a>"
                    )
                    .prependTo(s),
                  a.opts.navbar.add && s.addClass(t.hasnavbar));
            }
          });
          var d = this.__findAddBack(n, "." + t.listview)
            .children("." + t.selected)
            .removeClass(t.selected)
            .last()
            .addClass(t.selected);
          d
            .add(d.parentsUntil("." + t.menu, "li"))
            .filter("." + t.vertical)
            .addClass(t.opened)
            .end()
            .each(function () {
              e(this)
                .parentsUntil("." + t.menu, "." + t.panel)
                .not("." + t.vertical)
                .first()
                .addClass(t.opened)
                .parentsUntil("." + t.menu, "." + t.panel)
                .not("." + t.vertical)
                .first()
                .addClass(t.opened)
                .addClass(t.subopened);
            }),
            d
              .children("." + t.panel)
              .not("." + t.vertical)
              .addClass(t.opened)
              .parentsUntil("." + t.menu, "." + t.panel)
              .not("." + t.vertical)
              .first()
              .addClass(t.opened)
              .addClass(t.subopened);
          var h = c.filter("." + t.opened);
          return (
            h.length || (h = s.first()),
            h.addClass(t.opened).last().addClass(t.current),
            s
              .not("." + t.vertical)
              .not(h.last())
              .addClass(t.hidden)
              .end()
              .filter(function () {
                return !e(this).parent().hasClass(t.panels);
              })
              .appendTo(this.$pnls),
            s
          );
        },
        _initAnchors: function () {
          var i = this;
          a.$body.on(n.click + "-oncanvas", "a[href]", function (n) {
            var a = e(this),
              o = !1,
              s = i.$menu.find(a).length;
            for (var l in e[r].addons)
              if (e[r].addons[l].clickAnchor.call(i, a, s)) {
                o = !0;
                break;
              }
            var c = a.attr("href");
            if (!o && s && c.length > 1 && "#" == c.slice(0, 1))
              try {
                var d = e(c, i.$menu);
                d.is("." + t.panel) &&
                  ((o = !0),
                  i[
                    a.parent().hasClass(t.vertical)
                      ? "togglePanel"
                      : "openPanel"
                  ](d));
              } catch (e) {}
            if (
              (o && n.preventDefault(),
              !o &&
                s &&
                a.is("." + t.listview + " > li > a") &&
                !a.is('[rel="external"]') &&
                !a.is('[target="_blank"]'))
            ) {
              i.__valueOrFn(i.opts.onClick.setSelected, a) &&
                i.setSelected(e(n.target).parent());
              var h = i.__valueOrFn(
                i.opts.onClick.preventDefault,
                a,
                "#" == c.slice(0, 1)
              );
              h && n.preventDefault(),
                i.__valueOrFn(i.opts.onClick.close, a, h) && i.close();
            }
          });
        },
        _initAddons: function () {
          var t;
          for (t in e[r].addons)
            e[r].addons[t].add.call(this),
              (e[r].addons[t].add = function () {});
          for (t in e[r].addons) e[r].addons[t].setup.call(this);
        },
        _getOriginalMenuId: function () {
          var e = this.$menu.attr("id");
          return e && e.length && this.conf.clone && (e = t.umm(e)), e;
        },
        __api: function () {
          var t = this,
            i = {};
          return (
            e.each(this._api, function (e) {
              var n = this;
              i[n] = function () {
                var e = t[n].apply(t, arguments);
                return void 0 === e ? i : e;
              };
            }),
            i
          );
        },
        __valueOrFn: function (e, t, i) {
          return "function" == typeof e
            ? e.call(t[0])
            : void 0 === e && void 0 !== i
            ? i
            : e;
        },
        __refactorClass: function (e, i, n) {
          return e
            .filter("." + i)
            .removeClass(i)
            .addClass(t[n]);
        },
        __findAddBack: function (e, t) {
          return e.find(t).add(e.filter(t));
        },
        __filterListItems: function (e) {
          return e.not("." + t.divider).not("." + t.hidden);
        },
        __transitionend: function (e, t, i) {
          var a = !1,
            r = function () {
              a || t.call(e[0]), (a = !0);
            };
          e.one(n.transitionend, r),
            e.one(n.webkitTransitionEnd, r),
            setTimeout(r, 1.1 * i);
        },
        __getUniqueId: function () {
          return t.mm(e[r].uniqueId++);
        },
      }),
      (e.fn[r] = function (o, s) {
        return (
          e[r].glbl ||
            ((a = {
              $wndw: e(window),
              $docu: e(document),
              $html: e("html"),
              $body: e("body"),
            }),
            (t = {}),
            (i = {}),
            (n = {}),
            e.each([t, i, n], function (e, t) {
              t.add = function (e) {
                for (var i = 0, n = (e = e.split(" ")).length; n > i; i++)
                  t[e[i]] = t.mm(e[i]);
              };
            }),
            (t.mm = function (e) {
              return "mm-" + e;
            }),
            t.add(
              "wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"
            ),
            (t.umm = function (e) {
              return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e;
            }),
            (i.mm = function (e) {
              return "mm-" + e;
            }),
            i.add("parent sub"),
            (n.mm = function (e) {
              return e + ".mm";
            }),
            n.add(
              "transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"
            ),
            (e[r]._c = t),
            (e[r]._d = i),
            (e[r]._e = n),
            (e[r].glbl = a)),
          (o = e.extend(!0, {}, e[r].defaults, o)),
          (s = e.extend(!0, {}, e[r].configuration, s)),
          this.each(function () {
            var t = e(this);
            if (!t.data(r)) {
              var i = new e[r](t, o, s);
              i.$menu.data(r, i.__api());
            }
          })
        );
      }),
      (e[r].support = {
        touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
        csstransitions: (function () {
          if (
            "undefined" != typeof Modernizr &&
            void 0 !== Modernizr.csstransitions
          )
            return Modernizr.csstransitions;
          var e = (document.body || document.documentElement).style,
            t = "transition";
          if ("string" == typeof e[t]) return !0;
          var i = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
          t = t.charAt(0).toUpperCase() + t.substr(1);
          for (var n = 0; n < i.length; n++)
            if ("string" == typeof e[i[n] + t]) return !0;
          return !1;
        })(),
      }));
  })(jQuery),
  (function (e) {
    var t,
      i,
      n,
      a,
      r = "mmenu",
      o = "offCanvas";
    (e[r].addons[o] = {
      setup: function () {
        if (this.opts[o]) {
          var i = this.opts[o],
            n = this.conf[o];
          (a = e[r].glbl),
            (this._api = e.merge(this._api, ["open", "close", "setPage"])),
            ("top" == i.position || "bottom" == i.position) &&
              (i.zposition = "front"),
            "string" != typeof n.pageSelector &&
              (n.pageSelector = "> " + n.pageNodetype),
            (a.$allMenus = (a.$allMenus || e()).add(this.$menu)),
            (this.vars.opened = !1);
          var s = [t.offcanvas];
          "left" != i.position && s.push(t.mm(i.position)),
            "back" != i.zposition && s.push(t.mm(i.zposition)),
            this.$menu.addClass(s.join(" ")).parent().removeClass(t.wrapper),
            this.setPage(a.$page),
            this._initBlocker(),
            this["_initWindow_" + o](),
            this.$menu[n.menuInjectMethod + "To"](n.menuWrapperSelector);
          var l = window.location.hash;
          if (l) {
            var c = this._getOriginalMenuId();
            c && c == l.slice(1) && this.open();
          }
        }
      },
      add: function () {
        (t = e[r]._c),
          (i = e[r]._d),
          (n = e[r]._e),
          t.add(
            "offcanvas slideout blocking modal background opening blocker page"
          ),
          i.add("style"),
          n.add("resize");
      },
      clickAnchor: function (e, t) {
        if (!this.opts[o]) return !1;
        var i = this._getOriginalMenuId();
        return i && e.is('[href="#' + i + '"]')
          ? (this.open(), !0)
          : a.$page
          ? !(
              !(i = a.$page.first().attr("id")) ||
              !e.is('[href="#' + i + '"]') ||
              (this.close(), 0)
            )
          : void 0;
      },
    }),
      (e[r].defaults[o] = {
        position: "left",
        zposition: "back",
        blockUI: !0,
        moveBackground: !0,
      }),
      (e[r].configuration[o] = {
        pageNodetype: "div",
        pageSelector: null,
        noPageSelector: [],
        wrapPageIfNeeded: !0,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend",
      }),
      (e[r].prototype.open = function () {
        if (!this.vars.opened) {
          var e = this;
          this._openSetup(),
            setTimeout(function () {
              e._openFinish();
            }, this.conf.openingInterval),
            this.trigger("open");
        }
      }),
      (e[r].prototype._openSetup = function () {
        var r = this,
          s = this.opts[o];
        this.closeAllOthers(),
          a.$page.each(function () {
            e(this).data(i.style, e(this).attr("style") || "");
          }),
          a.$wndw.trigger(n.resize + "-" + o, [!0]);
        var l = [t.opened];
        s.blockUI && l.push(t.blocking),
          "modal" == s.blockUI && l.push(t.modal),
          s.moveBackground && l.push(t.background),
          "left" != s.position && l.push(t.mm(this.opts[o].position)),
          "back" != s.zposition && l.push(t.mm(this.opts[o].zposition)),
          this.opts.extensions && l.push(this.opts.extensions),
          a.$html.addClass(l.join(" ")),
          setTimeout(function () {
            r.vars.opened = !0;
          }, this.conf.openingInterval),
          this.$menu.addClass(t.current + " " + t.opened);
      }),
      (e[r].prototype._openFinish = function () {
        var e = this;
        this.__transitionend(
          a.$page.first(),
          function () {
            e.trigger("opened");
          },
          this.conf.transitionDuration
        ),
          a.$html.addClass(t.opening),
          this.trigger("opening");
      }),
      (e[r].prototype.close = function () {
        if (this.vars.opened) {
          var n = this;
          this.__transitionend(
            a.$page.first(),
            function () {
              n.$menu.removeClass(t.current).removeClass(t.opened),
                a.$html
                  .removeClass(t.opened)
                  .removeClass(t.blocking)
                  .removeClass(t.modal)
                  .removeClass(t.background)
                  .removeClass(t.mm(n.opts[o].position))
                  .removeClass(t.mm(n.opts[o].zposition)),
                n.opts.extensions && a.$html.removeClass(n.opts.extensions),
                a.$page.each(function () {
                  e(this).attr("style", e(this).data(i.style));
                }),
                (n.vars.opened = !1),
                n.trigger("closed");
            },
            this.conf.transitionDuration
          ),
            a.$html.removeClass(t.opening),
            this.trigger("close"),
            this.trigger("closing");
        }
      }),
      (e[r].prototype.closeAllOthers = function () {
        a.$allMenus.not(this.$menu).each(function () {
          var t = e(this).data(r);
          t && t.close && t.close();
        });
      }),
      (e[r].prototype.setPage = function (i) {
        var n = this,
          r = this.conf[o];
        (i && i.length) ||
          ((i = a.$body.find(r.pageSelector)),
          r.noPageSelector.length && (i = i.not(r.noPageSelector.join(", "))),
          i.length > 1 &&
            r.wrapPageIfNeeded &&
            (i = i.wrapAll("<" + this.conf[o].pageNodetype + " />").parent())),
          i.each(function () {
            e(this).attr("id", e(this).attr("id") || n.__getUniqueId());
          }),
          i.addClass(t.page + " " + t.slideout),
          (a.$page = i),
          this.trigger("setPage", i);
      }),
      (e[r].prototype["_initWindow_" + o] = function () {
        a.$wndw.off(n.keydown + "-" + o).on(n.keydown + "-" + o, function (e) {
          return a.$html.hasClass(t.opened) && 9 == e.keyCode
            ? (e.preventDefault(), !1)
            : void 0;
        });
        var e = 0;
        a.$wndw.off(n.resize + "-" + o).on(n.resize + "-" + o, function (i, n) {
          if (1 == a.$page.length && (n || a.$html.hasClass(t.opened))) {
            var r = a.$wndw.height();
            (n || r != e) && ((e = r), a.$page.css("minHeight", r));
          }
        });
      }),
      (e[r].prototype._initBlocker = function () {
        var i = this;
        this.opts[o].blockUI &&
          (a.$blck ||
            (a.$blck = e(
              '<div id="' + t.blocker + '" class="' + t.slideout + '" />'
            )),
          a.$blck
            .appendTo(a.$body)
            .off(n.touchstart + "-" + o + " " + n.touchmove + "-" + o)
            .on(
              n.touchstart + "-" + o + " " + n.touchmove + "-" + o,
              function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  a.$blck.trigger(n.mousedown + "-" + o);
              }
            )
            .off(n.mousedown + "-" + o)
            .on(n.mousedown + "-" + o, function (e) {
              e.preventDefault(),
                a.$html.hasClass(t.modal) || (i.closeAllOthers(), i.close());
            }));
      });
  })(jQuery),
  (function (e) {
    var t,
      i,
      n,
      a = "mmenu",
      r = "scrollBugFix";
    (e[a].addons[r] = {
      setup: function () {
        var o = this,
          s = this.opts[r];
        if (
          (this.conf[r],
          (n = e[a].glbl),
          e[a].support.touch &&
            this.opts.offCanvas &&
            this.opts.offCanvas.modal &&
            ("boolean" == typeof s && (s = { fix: s }),
            "object" != typeof s && (s = {}),
            (s = this.opts[r] = e.extend(!0, {}, e[a].defaults[r], s)).fix))
        ) {
          var l = this.$menu.attr("id"),
            c = !1;
          this.bind("opening", function () {
            this.$pnls.children("." + t.current).scrollTop(0);
          }),
            n.$docu.on(i.touchmove, function (e) {
              o.vars.opened && e.preventDefault();
            }),
            n.$body
              .on(
                i.touchstart,
                "#" + l + "> ." + t.panels + "> ." + t.current,
                function (e) {
                  o.vars.opened &&
                    (c ||
                      ((c = !0),
                      0 === e.currentTarget.scrollTop
                        ? (e.currentTarget.scrollTop = 1)
                        : e.currentTarget.scrollHeight ===
                            e.currentTarget.scrollTop +
                              e.currentTarget.offsetHeight &&
                          (e.currentTarget.scrollTop -= 1),
                      (c = !1)));
                }
              )
              .on(
                i.touchmove,
                "#" + l + "> ." + t.panels + "> ." + t.current,
                function (t) {
                  o.vars.opened &&
                    e(this)[0].scrollHeight > e(this).innerHeight() &&
                    t.stopPropagation();
                }
              ),
            n.$wndw.on(i.orientationchange, function () {
              o.$pnls
                .children("." + t.current)
                .scrollTop(0)
                .css({ "-webkit-overflow-scrolling": "auto" })
                .css({ "-webkit-overflow-scrolling": "touch" });
            });
        }
      },
      add: function () {
        (t = e[a]._c), e[a]._d, (i = e[a]._e);
      },
      clickAnchor: function (e, t) {},
    }),
      (e[a].defaults[r] = { fix: !0 });
  })(jQuery),
  (function (e, t) {
    "use strict";
    var i,
      n,
      a,
      r,
      o,
      s,
      l,
      c,
      d,
      h,
      f,
      u,
      p,
      g,
      m,
      v,
      _,
      w,
      b =
        ((a = "sf-breadcrumb"),
        (r = "sf-js-enabled"),
        (o = "sf-with-ul"),
        (s = "sf-arrows"),
        (n = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(
          navigator.userAgent
        )) && e("html").css("cursor", "pointer").on("click", e.noop),
        (l = n),
        (c =
          "behavior" in (i = document.documentElement.style) &&
          "fill" in i &&
          /iemobile/i.test(navigator.userAgent)),
        (d = !!t.PointerEvent),
        (h = function (e, t) {
          var i = r;
          t.cssArrows && (i += " " + s), e.toggleClass(i);
        }),
        (f = function (e) {
          e.children("a").toggleClass(o);
        }),
        (u = function (e) {
          var t = e.css("ms-touch-action"),
            i = e.css("touch-action");
          (i = "pan-y" === (i = i || t) ? "auto" : "pan-y"),
            e.css({ "ms-touch-action": i, "touch-action": i });
        }),
        (p = function (t) {
          var i = e(this),
            n = w(i),
            a = i.siblings(t.data.popUpSelector);
          return !1 === n.onHandleTouch.call(a)
            ? this
            : void (
                a.length > 0 &&
                a.is(":hidden") &&
                (i.one("click.superfish", !1),
                "MSPointerDown" === t.type || "pointerdown" === t.type
                  ? i.trigger("focus")
                  : e.proxy(g, i.parent("li"))())
              );
        }),
        (g = function () {
          var t = e(this),
            i = w(t);
          clearTimeout(i.sfTimer),
            t.siblings().superfish("hide").end().superfish("show");
        }),
        (m = function () {
          var t = e(this),
            i = w(t);
          l
            ? e.proxy(v, t, i)()
            : (clearTimeout(i.sfTimer),
              (i.sfTimer = setTimeout(e.proxy(v, t, i), i.delay)));
        }),
        (v = function (t) {
          (t.retainPath = e.inArray(this[0], t.$path) > -1),
            this.superfish("hide"),
            this.parents("." + t.hoverClass).length ||
              (t.onIdle.call(_(this)), t.$path.length && e.proxy(g, t.$path)());
        }),
        (_ = function (e) {
          return e.closest("." + r);
        }),
        (w = function (e) {
          return _(e).data("sf-options");
        }),
        {
          hide: function (t) {
            if (this.length) {
              var i = w(this);
              if (!i) return this;
              var n = !0 === i.retainPath ? i.$path : "",
                a = this.find("li." + i.hoverClass)
                  .add(this)
                  .not(n)
                  .removeClass(i.hoverClass)
                  .children(i.popUpSelector),
                r = i.speedOut;
              if (
                (t && (a.show(), (r = 0)),
                (i.retainPath = !1),
                !1 === i.onBeforeHide.call(a))
              )
                return this;
              a.stop(!0, !0).animate(
                i.animationOut,
                r,
                "easeOutQuad",
                function () {
                  var t = e(this);
                  i.onHide.call(t);
                }
              );
            }
            return this;
          },
          show: function () {
            var e = w(this);
            if (!e) return this;
            var t = this.addClass(e.hoverClass).children(e.popUpSelector);
            return !1 === e.onBeforeShow.call(t)
              ? this
              : (t
                  .stop(!0, !0)
                  .animate(e.animation, e.speed, "easeOutQuad", function () {
                    e.onShow.call(t);
                  }),
                this);
          },
          destroy: function () {
            return this.each(function () {
              var t,
                i = e(this),
                n = i.data("sf-options");
              return (
                !!n &&
                ((t = i.find(n.popUpSelector).parent("li")),
                clearTimeout(n.sfTimer),
                h(i, n),
                f(t),
                u(i),
                i.off(".superfish").off(".hoverIntent"),
                t.children(n.popUpSelector).attr("style", function (e, t) {
                  return t.replace(/display[^;]+;?/g, "");
                }),
                n.$path
                  .removeClass(n.hoverClass + " " + a)
                  .addClass(n.pathClass),
                i.find("." + n.hoverClass).removeClass(n.hoverClass),
                n.onDestroy.call(i),
                void i.removeData("sf-options"))
              );
            });
          },
          init: function (t) {
            return this.each(function () {
              var i = e(this);
              if (i.data("sf-options")) return !1;
              var n,
                r = e.extend({}, e.fn.superfish.defaults, t),
                o = i.find(r.popUpSelector).parent("li");
              (r.$path =
                ((n = r),
                i
                  .find("li." + n.pathClass)
                  .slice(0, n.pathLevels)
                  .addClass(n.hoverClass + " " + a)
                  .filter(function () {
                    return e(this)
                      .children(n.popUpSelector)
                      .hide()
                      .show().length;
                  })
                  .removeClass(n.pathClass))),
                i.data("sf-options", r),
                h(i, r),
                f(o),
                u(i),
                (function (t, i) {
                  var n = "li:has(" + i.popUpSelector + ")";
                  e.fn.hoverIntent && !i.disableHI
                    ? t.hoverIntent(g, m, n)
                    : t
                        .on("mouseenter.superfish", n, g)
                        .on("mouseleave.superfish", n, m);
                  var a = "MSPointerDown.superfish";
                  d && (a = "pointerdown.superfish"),
                    l || (a += " touchend.superfish"),
                    c && (a += " mousedown.superfish"),
                    t
                      .on("focusin.superfish", "li", g)
                      .on("focusout.superfish", "li", m)
                      .on(a, "a", i, p);
                })(i, r),
                o.not("." + a).superfish("hide", !0),
                r.onInit.call(this);
            });
          },
        });
    (e.fn.superfish = function (t, i) {
      return b[t]
        ? b[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : "object" != typeof t && t
        ? e.error("Method " + t + " does not exist on jQuery.fn.superfish")
        : b.init.apply(this, arguments);
    }),
      (e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: { opacity: "show" },
        animationOut: { opacity: "hide" },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop,
      });
  })(jQuery, window);
var realfactory_script_core = { home_url: "index.html" },
  gdlr_core_pbf = {
    admin: "",
    video: { width: "640", height: "360" },
    ajax_url: "https://demo.goodlayers.com/realfactory/wp-admin/admin-ajax.php",
    ilightbox_skin: "dark",
  };
!(function (e) {
  "use strict";
  var t = !1;
  t = !!(
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
  var i = "desktop";
  "function" == typeof window.matchMedia
    ? (e(window).on(
        "resize themename-set-display gdlr-core-element-resize",
        function () {
          i = window.matchMedia("(max-width: 419px)").matches
            ? "mobile-portrait"
            : window.matchMedia("(max-width: 767px)").matches
            ? "mobile-landscape"
            : window.matchMedia("(max-width: 959px)").matches
            ? "tablet"
            : "desktop";
        }
      ),
      e(window).trigger("themename-set-display"))
    : (e(window).on(
        "resize themename-set-display gdlr-core-element-resize",
        function () {
          i =
            e(window).innerWidth() <= 419
              ? "mobile-portrait"
              : e(window).innerWidth() <= 767
              ? "mobile-landscape"
              : e(window).innerWidth() <= 959
              ? "tablet"
              : "desktop";
        }
      ),
      e(window).trigger("themename-set-display")),
    (e.fn.gdlr_core_content_script = function (t, i) {
      if (
        (e(this).gdlr_core_fluid_video(t),
        !i && "function" == typeof e.fn.mediaelementplayer)
      ) {
        var n = {};
        "undefined" != typeof _wpmejsSettings &&
          (n.pluginPath = _wpmejsSettings.pluginPath),
          e(this).find("audio").mediaelementplayer(n);
      }
      return e(this);
    }),
    (e.fn.gdlr_core_fluid_video = function (t) {
      if (void 0 === t)
        var i = e(this).find('iframe[src*="youtube"], iframe[src*="vimeo"]');
      else i = t.filter('iframe[src*="youtube"], iframe[src*="vimeo"]');
      return (
        i.each(function () {
          if (e(this).closest(".ls-container, .master-slider").length <= 0) {
            if (
              (e(this).is("embed") && e(this).parent("object").length) ||
              e(this).parent(".gdlr-core-fluid-video-wrapper").length
            )
              return;
            e(this).attr("id") ||
              e(this).attr(
                "id",
                "gdlr-video-" + Math.floor(999999 * Math.random())
              );
            var t = e(this).height() / e(this).width();
            e(this).removeAttr("height").removeAttr("width");
            try {
              e(this)
                .wrap('<div class="gdlr-core-fluid-video-wrapper"></div>')
                .parent()
                .css("padding-top", 100 * t + "%"),
                e(this).attr("src", e(this).attr("src"));
            } catch (e) {}
          }
        }),
        e(this)
      );
    }),
    (e.fn.gdlr_core_mejs_ajax = function () {
      if ("function" == typeof e.fn.mediaelementplayer) {
        var t = {};
        "undefined" != typeof _wpmejsSettings &&
          (t.pluginPath = _wpmejsSettings.pluginPath),
          e(this).find("audio, video").mediaelementplayer(t);
      }
    }),
    (e.fn.gdlr_core_counter_item = function (t) {
      if (void 0 === t)
        var n = e(this).find(
          ".gdlr-core-counter-item-count[data-counter-start][data-counter-end]"
        );
      else
        n = t.filter(
          ".gdlr-core-counter-item-count[data-counter-start][data-counter-end]"
        );
      n.each(function () {
        var t = e(this),
          n = parseInt(e(this).attr("data-counter-start")),
          a = parseInt(e(this).attr("data-counter-end")),
          r = e(this).attr("data-duration")
            ? parseInt(e(this).attr("data-duration"))
            : 4e3;
        "mobile-landscape" == i ||
        "mobile-portrait" == i ||
        e(window).scrollTop() + e(window).height() > t.offset().top
          ? e({ counter_num: n }).animate(
              { counter_num: a },
              {
                duration: r,
                easing: "easeOutExpo",
                step: function () {
                  t.html(Math.ceil(this.counter_num));
                },
              }
            )
          : e(window).scroll(function (i) {
              e(this).scrollTop() + e(window).height() > t.offset().top &&
                (e({ counter_num: n }).animate(
                  { counter_num: a },
                  {
                    duration: r,
                    easing: "easeOutExpo",
                    step: function () {
                      t.html(Math.ceil(this.counter_num));
                    },
                  }
                ),
                e(this).unbind("scroll", i.handleObj.handler, i));
            });
      });
    }),
    (e.fn.gdlr_core_typed_animation = function (t) {
      if (void 0 === t)
        var i = e(this).find(
          ".gdlr-core-type-animation-item-animated[data-animation-text]"
        );
      else
        i = t.filter(
          ".gdlr-core-type-animation-item-animated[data-animation-text]"
        );
      i.each(function () {
        var t = JSON.parse(e(this).attr("data-animation-text"));
        "function" == typeof e.fn.typed &&
          t &&
          t.length > 0 &&
          e(this).typed({ strings: t, typeSpeed: 50, loop: !0 });
      });
    }),
    (e.fn.gdlr_core_countdown_item = function (t) {
      if (void 0 === t) var i = e(this).find(".gdlr-core-countdown-wrap");
      else i = t.filter(".gdlr-core-countdown-wrap");
      i.each(function () {
        var t = e(this).find(".gdlr-core-day"),
          i = parseInt(t.text()),
          n = e(this).find(".gdlr-core-hrs"),
          a = parseInt(n.text()),
          r = e(this).find(".gdlr-core-min"),
          o = parseInt(r.text()),
          s = e(this).find(".gdlr-core-sec"),
          l = parseInt(s.text());
        e(window).load(function () {
          s.text("00"), s.css("width", s.width()), s.text(l);
        });
        var c = setInterval(function () {
          l > 0
            ? l--
            : ((l = 59),
              o > 0
                ? o--
                : ((o = 59),
                  a > 0
                    ? a--
                    : ((a = 24),
                      i > 0
                        ? i--
                        : ((i = 0),
                          (a = 0),
                          (o = 0),
                          (l = 0),
                          clearInterval(c)),
                      t.text(i)),
                  n.text(a)),
              r.text(o)),
            s.text(l);
        }, 1e3);
      });
    }),
    (e.fn.gdlr_core_accordion = function (t) {
      if (void 0 === t)
        var i = e(this).find(".gdlr-core-accordion-item-title"),
          n = e(this).find(".gdlr-core-accordion-item-icon");
      else
        (i = t.filter(".gdlr-core-accordion-item-title")),
          (n = t.filter(".gdlr-core-accordion-item-icon"));
      i.click(function () {
        e(this).siblings(".gdlr-core-accordion-item-content").slideDown(200);
        var t = e(this).closest(".gdlr-core-accordion-item-tab");
        t.hasClass("gdlr-core-active")
          ? t
              .closest(".gdlr-core-accordion-item")
              .hasClass("gdlr-core-allow-close-all") &&
            t
              .removeClass("gdlr-core-active")
              .find(".gdlr-core-accordion-item-content")
              .css({ display: "block" })
              .slideUp(200)
          : t
              .addClass("gdlr-core-active")
              .siblings(".gdlr-core-active")
              .removeClass("gdlr-core-active")
              .find(".gdlr-core-accordion-item-content")
              .css({ display: "block" })
              .slideUp(200);
      }),
        n.click(function () {
          e(this)
            .siblings(".gdlr-core-accordion-item-content-wrapper")
            .children(".gdlr-core-accordion-item-content")
            .slideDown(200);
          var t = e(this).closest(".gdlr-core-accordion-item-tab");
          t.hasClass("gdlr-core-active")
            ? t
                .closest(".gdlr-core-accordion-item")
                .hasClass("gdlr-core-allow-close-all") &&
              t
                .removeClass("gdlr-core-active")
                .find(".gdlr-core-accordion-item-content")
                .css({ display: "block" })
                .slideUp(200)
            : t
                .addClass("gdlr-core-active")
                .siblings(".gdlr-core-active")
                .removeClass("gdlr-core-active")
                .find(".gdlr-core-accordion-item-content")
                .css({ display: "block" })
                .slideUp(200);
        });
    }),
    (e.fn.gdlr_core_toggle_box = function (t) {
      if (void 0 === t)
        var i = e(this).find(".gdlr-core-toggle-box-item-title"),
          n = e(this).find(".gdlr-core-toggle-box-item-icon");
      else
        (i = t.filter(".gdlr-core-toggle-box-item-title")),
          (n = t.filter(".gdlr-core-toggle-box-item-icon"));
      i.click(function () {
        var t = e(this).closest(".gdlr-core-toggle-box-item-tab");
        t.hasClass("gdlr-core-active")
          ? (t.removeClass("gdlr-core-active"),
            e(this)
              .siblings(".gdlr-core-toggle-box-item-content")
              .css({ display: "block" })
              .slideUp(200))
          : (t.addClass("gdlr-core-active"),
            e(this)
              .siblings(".gdlr-core-toggle-box-item-content")
              .css({ display: "none" })
              .slideDown(200));
      }),
        n.click(function () {
          var t = e(this).closest(".gdlr-core-toggle-box-item-tab");
          t.hasClass("gdlr-core-active")
            ? (t.removeClass("gdlr-core-active"),
              e(this)
                .siblings(".gdlr-core-toggle-box-item-content-wrapper")
                .children(".gdlr-core-toggle-box-item-content")
                .css({ display: "block" })
                .slideUp(200))
            : (t.addClass("gdlr-core-active"),
              e(this)
                .siblings(".gdlr-core-toggle-box-item-content-wrapper")
                .children(".gdlr-core-toggle-box-item-content")
                .css({ display: "none" })
                .slideDown(200));
        });
    }),
    (e.fn.gdlr_core_alert_box_item = function (t) {
      if (void 0 === t) var i = e(this).find(".gdlr-core-alert-box-remove");
      else i = t.filter(".gdlr-core-alert-box-remove");
      i.click(function () {
        e(this)
          .closest(".gdlr-core-alert-box-item")
          .slideUp(400, "easeOutQuart", function () {
            e(this).remove();
          });
      });
    }),
    (e.fn.gdlr_core_parallax_background = function (t) {
      if (void 0 === t) var i = e(this).find(".gdlr-core-parallax");
      else i = t.filter(".gdlr-core-parallax");
      return (
        i.each(function () {
          new n(e(this));
        }),
        e(this)
      );
    });
  var n = function (e) {
    (this.wrapper_bg = e),
      (this.wrapper = e.parent()),
      (this.parallax_speed = parseFloat(e.attr("data-parallax-speed"))),
      this.init();
  };
  n.prototype = {
    init: function () {
      var i = this;
      0 != i.parallax_speed &&
        (i.set_extra_height(),
        i.set_background_position(i),
        e(window).on("load resize gdlr-core-element-resize", function () {
          i.set_extra_height(e(this)), i.set_background_position(i);
        }),
        e(window).on("scroll", function () {
          i.set_background_position(i);
        })),
        t
          ? (i.wrapper_bg.children('[data-background-type="video"]').remove(),
            i.wrapper_bg.attr("data-video-fallback") &&
              i.wrapper_bg.css(
                "background-image",
                "url(" + i.wrapper_bg.attr("data-video-fallback") + ")"
              ))
          : i.wrapper_bg
              .children('[data-background-type="video"]')
              .each(function () {
                0 == i.parallax_speed &&
                  (i.set_extra_height(),
                  i.set_background_position(i),
                  e(window).on(
                    "load resize gdlr-core-element-resize",
                    function () {
                      i.set_extra_height(e(this)), i.set_background_position(i);
                    }
                  )),
                  e(this)
                    .find("iframe")
                    .each(function () {
                      if ("vimeo" == e(this).attr("data-player-type")) {
                        var t = $f(e(this)[0]);
                        t.addEvent("ready", function () {
                          t.api("setVolume", 0);
                        });
                      } else
                        "youtube" == e(this).attr("data-player-type") &&
                          (0 ==
                            e("body").children("#gdlr-core-youtube-api")
                              .length &&
                            e("body").append(
                              '<script type="text/javascript" src="https://www.youtube.com/iframe_api" id="gdlr-core-youtube-api" ></script>'
                            ),
                          void 0 === window.gdlr_core_ytb
                            ? (window.gdlr_core_ytb = [e(this)[0]])
                            : window.gdlr_core_ytb.push(e(this)[0]),
                          (window.onYouTubeIframeAPIReady = function () {
                            for (var e in window.gdlr_core_ytb)
                              new YT.Player(gdlr_core_ytb[e], {
                                events: {
                                  onReady: function (e) {
                                    e.target.mute();
                                  },
                                },
                              });
                          }));
                    });
              });
    },
    set_extra_height: function () {
      var t = this,
        n = t.wrapper.outerHeight();
      "mobile-landscape" == i || "mobile-portrait" == i
        ? t.wrapper_bg.css({ transform: "" })
        : t.parallax_speed > 0
        ? (n +=
            (e(window).height() - t.wrapper.outerHeight()) * t.parallax_speed)
        : t.parallax_speed < 0 &&
          (n +=
            (e(window).height() + t.wrapper.outerHeight()) *
            Math.abs(t.parallax_speed)),
        t.wrapper_bg.css({ height: n });
      var a =
        parseInt(gdlr_core_pbf.video.width) /
        parseInt(gdlr_core_pbf.video.height);
      t.wrapper_bg.children('[data-background-type="video"]').each(function () {
        if (t.wrapper_bg.width() / t.wrapper_bg.height() > a) {
          var i = t.wrapper_bg.width() / a,
            n = (t.wrapper_bg.height() - i) / 2;
          e(this).css({
            width: t.wrapper_bg.width(),
            height: i,
            "margin-left": 0,
            "margin-top": n,
          });
        } else {
          var r = t.wrapper_bg.height() * a;
          n = (t.wrapper_bg.width() - r) / 2;
          e(this).css({
            width: r,
            height: t.wrapper_bg.height(),
            "margin-left": n,
            "margin-top": 0,
          });
        }
      });
    },
    set_background_position: function (t) {
      if ("mobile-landscape" != i && "mobile-portrait" != i) {
        var n = t.wrapper.offset().top,
          a = e(window).scrollTop();
        a + e(window).height() > n &&
          a < n + t.wrapper.outerHeight() &&
          (t.parallax_speed > 0
            ? t.wrapper_bg.css({
                transform:
                  "translate(0px, " +
                  (e(window).scrollTop() - n) * t.parallax_speed +
                  "px)",
              })
            : t.parallax_speed < 0 &&
              t.wrapper_bg.css({
                transform:
                  "translate(0px, " +
                  (e(window).scrollTop() + e(window).height() - n) *
                    t.parallax_speed +
                  "px)",
              }));
      }
    },
  };
  var a = function (e, t) {
    void 0 === t
      ? (this.elem = e.find("[data-gdlr-animation]"))
      : ((this.elem = t.filter("[data-gdlr-animation]")),
        (this.preload = t.filter(".gdlr-core-page-preload"))),
      (this.ux_items = []),
      (this.ux_item_length = 0),
      this.init();
  };
  function r(t) {
    t.children(".gdlr-core-skill-circle-content").each(function () {
      e(this).css({ "margin-top": -e(this).outerHeight() / 2 });
    }),
      t.css({
        "max-width": t.parent().width(),
        "max-height": t.parent().width(),
      });
  }
  function o(t, i, n) {
    var a = e('<div class="gdlr-core-now-loading" ></div>').hide();
    e.ajax({
      type: "POST",
      url: gdlr_core_pbf.ajax_url,
      data: {
        action: t.attr("data-ajax"),
        settings: t.data("settings"),
        option: { name: i, value: n },
      },
      dataType: "json",
      beforeSend: function (e, i) {
        "replace" == t.attr("data-target-action") &&
          t.siblings("." + t.attr("data-target")).animate({ opacity: 0 }, 150),
          "gdlr-core-portfolio-item-holder" == t.attr("data-target") &&
            "replace" == t.attr("data-target-action") &&
            (a.insertBefore(t.siblings(".gdlr-core-portfolio-item-holder")),
            a.fadeIn(200));
      },
      error: function (e, t, i) {
        console.log(e, t, i);
      },
      success: function (i) {
        if ("success" == i.status) {
          if (i.content && t.attr("data-target"))
            if ("append" == t.attr("data-target-action")) {
              var n = e(i.content);
              if (
                (t.siblings("." + t.attr("data-target")).each(function () {
                  if (
                    (e(this).append(n),
                    n
                      .gdlr_core_lightbox()
                      .gdlr_core_flexslider()
                      .gdlr_core_content_script()
                      .gdlr_core_set_image_height(),
                    "masonry" == e(this).attr("data-layout") &&
                      "function" == typeof e.fn.isotope)
                  ) {
                    var t = e(this).isotope("addItems", n);
                    e(this).isotope("layoutItems", t, !0);
                  } else n.addClass("gdlr-core-animate-init");
                  n.gdlr_core_animate_list_item();
                }),
                i.load_more)
              )
                if ("none" != i.load_more) {
                  var r = e(i.load_more);
                  t.parent().append(r),
                    r.gdlr_core_ajax(r),
                    r.css("display", "none").slideDown(100),
                    t.remove();
                } else
                  t.slideUp(100, function () {
                    e(this).remove();
                  });
            } else if ("replace" == t.attr("data-target-action")) {
              n = e(i.content);
              if (
                (t.siblings("." + t.attr("data-target")).each(function () {
                  var t = !1,
                    i = e(this).height();
                  e(this).empty().append(n),
                    n
                      .gdlr_core_lightbox()
                      .gdlr_core_flexslider()
                      .gdlr_core_fluid_video()
                      .gdlr_core_set_image_height(),
                    "masonry" == e(this).attr("data-layout") &&
                    "function" == typeof e.fn.isotope
                      ? (e(this).isotope("destroy"),
                        e(this).parent().gdlr_core_isotope(),
                        (t = !0))
                      : (n.addClass("gdlr-core-animate-init"),
                        n.gdlr_core_animate_list_item());
                  var a = e(this).height();
                  e(this)
                    .css({ height: i, opacity: 1 })
                    .animate(
                      { height: a },
                      {
                        duration: 400,
                        easing: "easeOutExpo",
                        complete: function () {
                          t || e(this).css("height", "");
                        },
                      }
                    );
                }),
                i.pagination &&
                  (t
                    .siblings(".gdlr-core-pagination")
                    .slideUp(100, function () {
                      e(this).remove();
                    }),
                  "none" != i.pagination))
              ) {
                var o = e(i.pagination);
                t.parent().append(o),
                  o.gdlr_core_ajax(o),
                  o.css("display", "none").slideDown(100);
              }
              if (
                i.load_more &&
                (t
                  .siblings(".gdlr-core-load-more-wrap")
                  .slideUp(100, function () {
                    e(this).remove();
                  }),
                "none" != i.load_more)
              ) {
                r = e(i.load_more);
                t.parent().append(r),
                  r.gdlr_core_ajax(r),
                  r.css("display", "none").slideDown(100);
              }
            }
          void 0 !== i.settings && t.data("settings", i.settings),
            a.fadeOut(200, function () {
              e(this).remove();
            });
        } else console.log(i);
      },
    });
  }
  (a.prototype = {
    init: function () {
      var t = this;
      (t.ux_item_length = t.elem.each(function () {
        var n = e(this),
          a = 0.8;
        e(this).attr("data-gdlr-animation-offset") &&
          (a = parseFloat(e(this).attr("data-gdlr-animation-offset"))),
          "mobile-landscape" == i ||
          "mobile-portrait" == i ||
          e(window).scrollTop() + e(window).height() > n.offset().top
            ? t.ux_items.push(n)
            : e(window).scroll(function (i) {
                e(window).scrollTop() + e(window).height() * a >
                  n.offset().top &&
                  (t.ux_items.push(n),
                  e(window).unbind("scroll", i.handleObj.handler, i));
              });
      }).length),
        void 0 !== t.preload && t.preload.length
          ? e(window).load(function () {
              var e = t.preload.attr("data-animation-time");
              e || (e = 0),
                setTimeout(function () {
                  t.animate();
                }, e);
            })
          : t.animate();
    },
    animate: function () {
      var t = this,
        i = setInterval(function () {
          for (; t.ux_items.length > 0; ) {
            var n = t.ux_items.shift(),
              a = "600ms";
            if (
              (n.attr("data-gdlr-animation-duration") &&
                (a = n.attr("data-gdlr-animation-duration")),
              n.css({ "animation-duration": a }),
              n.addClass(n.attr("data-gdlr-animation")),
              setTimeout(function () {
                n.css({ "animation-duration": "" })
                  .removeClass(n.attr("data-gdlr-animation"))
                  .removeAttr("data-gdlr-animation");
              }, parseInt(a)),
              t.ux_item_length--,
              e(window).scrollTop() < n.offset().top + n.outerHeight())
            )
              break;
          }
          t.ux_item_length <= 0 && clearInterval(i);
        }, 200);
    },
  }),
    (e.fn.gdlr_core_ux = function (t) {
      return new a(e(this), t), e(this);
    }),
    (e.fn.gdlr_core_skill_bar = function (t) {
      if (void 0 === t) var n = e(this).find(".gdlr-core-skill-bar-filled");
      else n = t.filter(".gdlr-core-skill-bar-filled");
      n.each(function () {
        var t = e(this);
        "mobile-landscape" == i ||
        "mobile-portrait" == i ||
        e(window).scrollTop() + e(window).height() > t.offset().top
          ? t.animate(
              { width: parseInt(t.attr("data-width")) + "%" },
              { duration: 1200, easing: "easeOutQuart" }
            )
          : e(window).scroll(function (i) {
              e(window).scrollTop() + e(window).height() > t.offset().top &&
                (t.animate(
                  { width: parseInt(t.attr("data-width")) + "%" },
                  { duration: 1200, easing: "easeOutQuart" }
                ),
                e(window).unbind("scroll", i.handleObj.handler, i));
            });
      });
    }),
    (e.fn.gdlr_core_divider = function (t) {
      if (void 0 === t)
        var i = e(this).find(".gdlr-core-divider-item-with-icon-inner");
      else i = t.filter(".gdlr-core-divider-item-with-icon-inner");
      i.each(function () {
        var t = e(this),
          i = t.children("i, img").outerWidth(),
          n = (t.width() - i) / 2;
        e(this)
          .children(".gdlr-core-divider-line")
          .css({ width: n })
          .each(function () {
            e(this).css("margin-top", -e(this).outerHeight() / 2);
          }),
          e(window).on("resize gdlr-core-element-resize", function () {
            (i = t.children("i, img").outerWidth()),
              (n = (t.width() - i) / 2),
              t
                .children(".gdlr-core-divider-line")
                .css({ width: n })
                .each(function () {
                  e(this).css("margin-top", -e(this).outerHeight() / 2);
                });
          });
      });
    }),
    (window.gdlr_core_sidebar_wrapper = function (e, t) {
      (this.elem =
        void 0 === t
          ? e.find(
              ".gdlr-core-page-builder-wrapper-sidebar-container, .gdlr-core-pbf-sidebar-container"
            )
          : t.filter(
              ".gdlr-core-page-builder-wrapper-sidebar-container, .gdlr-core-pbf-sidebar-container"
            )),
        this.init();
    }),
    (gdlr_core_sidebar_wrapper.prototype = {
      init: function () {
        var t = this;
        t.set_height(),
          e(window).on("load resize gdlr-core-element-resize", function () {
            t.set_height();
          });
      },
      set_height: function () {
        this.elem.each(function () {
          if ("mobile-landscape" != i && "mobile-portrait" != i) {
            var t = e(this).find(".gdlr-core-pbf-sidebar-padding"),
              n = 0;
            t.css("min-height", "").each(function () {
              e(this).outerHeight() > n && (n = e(this).outerHeight());
            }),
              t.css("min-height", n);
          }
        });
      },
    }),
    (e.fn.gdlr_core_title_divider = function (t) {
      if (void 0 === t)
        var i = e(this).find(
          ".gdlr-core-title-item-title-wrap.gdlr-core-with-divider"
        );
      else
        i = t.filter(".gdlr-core-title-item-title-wrap.gdlr-core-with-divider");
      if (
        (i.each(function () {
          var t = e(this),
            i = t.children(".gdlr-core-title-item-title").outerWidth(!0),
            n = t.children(".gdlr-core-title-item-divider").length;
          n = n || 1;
          var a = (t.width() - i) / n;
          if (1 == n) {
            var r = t.children(".gdlr-core-title-item-link").outerWidth() + 20;
            t.children(".gdlr-core-title-item-divider").css({
              width: a - r,
              right: r,
            });
          } else t.children(".gdlr-core-title-item-divider").css({ width: a });
          e(window).on("resize gdlr-core-element-resize", function () {
            (i = t.children(".gdlr-core-title-item-title").outerWidth(!0)),
              (a = (t.width() - i) / n),
              1 == n
                ? ((r =
                    t.children(".gdlr-core-title-item-link").outerWidth() + 20),
                  t
                    .children(".gdlr-core-title-item-divider")
                    .css({ width: a - r, right: r }))
                : t.children(".gdlr-core-title-item-divider").css({ width: a });
          });
        }),
        void 0 === t)
      )
        var n = e(this).find(
          ".gdlr-core-title-item-title-wrap.gdlr-core-with-link-text"
        );
      else
        n = t.filter(
          ".gdlr-core-title-item-title-wrap.gdlr-core-with-link-text"
        );
      n.each(function () {
        var t = e(this),
          i = t.children(".gdlr-core-title-item-title").outerWidth(!0),
          n = t.children(".gdlr-core-title-item-link").outerWidth();
        t.width() < i + n
          ? t
              .children(".gdlr-core-title-item-link")
              .addClass("gdlr-core-overflow")
          : t
              .children(".gdlr-core-title-item-link")
              .removeClass("gdlr-core-overflow"),
          e(window).on("resize gdlr-core-element-resize", function () {
            t.width() < i + n
              ? t
                  .children(".gdlr-core-title-item-link")
                  .addClass("gdlr-core-overflow")
              : t
                  .children(".gdlr-core-title-item-link")
                  .removeClass("gdlr-core-overflow");
          });
      });
    }),
    (e.fn.gdlr_core_flipbox = function (t) {
      if ("function" == typeof e.fn.flip) {
        if (void 0 === t) var i = e(this).find(".gdlr-core-flipbox");
        else i = t.filter(".gdlr-core-flipbox");
        i.each(function () {
          var t = e(this).flip({
            axis: "y",
            trigger: "hover",
            autoSize: !1,
            front: ".gdlr-core-flipbox-front",
            back: ".gdlr-core-flipbox-back",
          });
          e(this)
            .find(".gdlr-core-flipbox-back a")
            .click(function () {
              t.data("flip-model") && t.data("flip-model").unflip();
            }),
            e(this).addClass("gdlr-core-after-init");
        });
      }
      return e(this);
    }),
    (e.fn.gdlr_core_pie_chart = function () {
      "function" == typeof e.fn.easyPieChart &&
        e(this).easyPieChart({
          animate: parseInt(e(this).attr("data-duration")),
          lineWidth: parseInt(e(this).attr("data-line-width")),
          size: parseInt(e(this).attr("data-width")),
          barColor: e(this).attr("data-filled-color"),
          trackColor: e(this).attr("data-filled-background"),
          scaleColor: !1,
          lineCap: "square",
        });
    }),
    (e.fn.gdlr_core_skill_circle = function (t) {
      if (void 0 === t) var i = e(this).find(".gdlr-core-skill-circle");
      else i = t.filter(".gdlr-core-skill-circle");
      i.each(function () {
        var t = e(this);
        r(t),
          e(window).on("resize gdlr-core-element-resize", function () {
            r(t);
          }),
          e(window).scrollTop() + e(window).height() > t.offset().top
            ? t.gdlr_core_pie_chart()
            : e(window).scroll(function (i) {
                e(window).scrollTop() + e(window).height() > t.offset().top &&
                  (t.gdlr_core_pie_chart(),
                  e(window).unbind("scroll", i.handleObj.handler, i));
              });
      });
    }),
    (e.fn.gdlr_core_tab = function (n) {
      if (void 0 === n) var a = e(this).find(".gdlr-core-tab-item");
      else a = n.filter(".gdlr-core-tab-item");
      a.each(function () {
        if (
          (e(this)
            .find(".gdlr-core-tab-item-title")
            .click(function () {
              if (!e(this).hasClass("gdlr-core-active")) {
                var t = e(this).attr("data-tab-id");
                e(this)
                  .addClass("gdlr-core-active")
                  .siblings()
                  .removeClass("gdlr-core-active"),
                  e(this)
                    .parent()
                    .siblings(".gdlr-core-tab-item-content-wrap")
                    .children('[data-tab-id="' + t + '"]')
                    .fadeIn(200)
                    .siblings()
                    .hide();
              }
            }),
          !t &&
            "mobile-landscape" != i &&
            "mobile-portrait" != i &&
            e(this).is(
              ".gdlr-core-tab-style2-horizontal, .gdlr-core-tab-style2-vertical"
            ))
        ) {
          var n = e(this).is(".gdlr-core-tab-style2-horizontal"),
            a = e(this).find(".gdlr-core-tab-item-title-line"),
            r = 0,
            o = 0;
          e(this)
            .children(".gdlr-core-tab-item-title-wrap")
            .children(".gdlr-core-active")
            .each(function () {
              n
                ? ((r = e(this).outerWidth()),
                  (o = e(this).position().left),
                  a.css({ width: r, left: o }))
                : ((r = e(this).outerHeight()),
                  (o = e(this).position().top),
                  a.css({ height: r, top: o }));
            }),
            e(window).on("resize gdlr-core-element-resize", function () {
              e(this)
                .children(".gdlr-core-tab-item-title-wrap")
                .children(".gdlr-core-active")
                .each(function () {
                  n
                    ? ((r = e(this).outerWidth()),
                      (o = e(this).position().left),
                      a.css({ width: r, left: o }))
                    : ((r = e(this).outerHeight()),
                      (o = e(this).position().top),
                      a.css({ height: r, top: o }));
                });
            }),
            e(this)
              .children(".gdlr-core-tab-item-title-wrap")
              .children(".gdlr-core-tab-item-title")
              .hover(
                function () {
                  n
                    ? a.animate(
                        {
                          width: e(this).outerWidth(),
                          left: e(this).position().left,
                        },
                        { duration: 300, easing: "easeOutQuart", queue: !1 }
                      )
                    : a.animate(
                        {
                          height: e(this).outerHeight(),
                          top: e(this).position().top,
                        },
                        { duration: 300, easing: "easeOutQuart", queue: !1 }
                      );
                },
                function () {
                  n
                    ? a.animate(
                        { width: r, left: o },
                        { duration: 300, easing: "easeOutQuart", queue: !1 }
                      )
                    : a.animate(
                        { height: r, top: o },
                        { duration: 300, easing: "easeOutQuart", queue: !1 }
                      );
                }
              ),
            e(this)
              .children(".gdlr-core-tab-item-title-wrap")
              .children(".gdlr-core-tab-item-title")
              .click(function () {
                n
                  ? ((r = e(this).outerWidth()),
                    (o = e(this).position().left),
                    a.css({ width: r, left: o }))
                  : ((r = e(this).outerHeight()),
                    (o = e(this).position().top),
                    a.css({ height: r, top: o }));
              });
        }
      });
    }),
    (e.fn.gdlr_core_sly = function (t) {
      if (void 0 === t) var i = e(this).find(".gdlr-core-sly-slider");
      else i = t.filter(".gdlr-core-sly-slider");
      return (
        i.addClass("gdlr-core-after-init").each(function () {
          var t = e(this);
          t.sly({
            horizontal: 1,
            itemNav: "basic",
            smart: 1,
            activateOn: "click",
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBy: 1,
            speed: 1e3,
            elasticBounds: 1,
            easing: "easeOutQuart",
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
            scrollBar: e(this).siblings(".gdlr-core-sly-scroll"),
          }),
            e(window).on("resize gdlr-core-element-resize", function () {
              t.sly("reload");
            });
        }),
        e(this)
      );
    }),
    (e.fn.gdlr_core_flexslider = function (t) {
      if (void 0 === t) var i = e(this).find(".gdlr-core-flexslider");
      else i = t.filter(".gdlr-core-flexslider");
      return (
        i.each(function () {
          var t = {
            useCSS: !1,
            animation: "fade",
            animationLoop: !0,
            prevText: '<i class="arrow_carrot-left"></i>',
            nextText: '<i class="arrow_carrot-right"></i>',
          };
          if (
            (e(this).find(".gdlr-core-flexslider").length > 0 &&
              (e(this).children("ul.slides").addClass("parent-slides"),
              (t.selector = ".parent-slides > li")),
            e(this).attr("data-disable-autoslide") && (t.slideshow = !1),
            e(this).attr("data-pausetime") &&
              (t.slideshowSpeed = parseInt(e(this).attr("data-pausetime"))),
            e(this).attr("data-slidespeed")
              ? (t.animationSpeed = parseInt(e(this).attr("data-slidespeed")))
              : (t.animationSpeed = 500),
            "carousel" == e(this).attr("data-type"))
          ) {
            (t.move = 1), (t.animation = "slide");
            var i = parseInt(e(this).attr("data-column"));
            (t.itemMargin =
              2 *
              parseInt(
                e(this)
                  .children("ul.slides")
                  .children("li:first-child")
                  .css("margin-right")
              )),
              (t.itemWidth =
                (e(this).width() + t.itemMargin) / i - t.itemMargin),
              (t.minItems = i),
              (t.maxItems = i);
            var n = e(this);
            e(window).on("resize gdlr-core-element-resize", function () {
              if (n.data("goodlayers_flexslider")) {
                var e = (n.width() + t.itemMargin) / i - t.itemMargin;
                n.data("goodlayers_flexslider").editItemWidth(e);
              }
            });
          } else
            e(this).attr("data-effect") &&
              ("kenburn" == e(this).attr("data-effect")
                ? (t.animation = "fade")
                : (t.animation = e(this).attr("data-effect")));
          if (
            (e(this).attr("data-nav") &&
            "both" != e(this).attr("data-nav") &&
            "navigation" != e(this).attr("data-nav") &&
            "navigation-outer" != e(this).attr("data-nav")
              ? (t.directionNav = !1)
              : e(this).attr("data-nav-parent") &&
                ("custom" == e(this).attr("data-nav-type")
                  ? (t.customDirectionNav = e(this)
                      .closest("." + e(this).attr("data-nav-parent"))
                      .find(".flex-prev, .flex-next"))
                  : e(this)
                      .closest("." + e(this).attr("data-nav-parent"))
                      .each(function () {
                        var i = e(
                            '<ul class="flex-direction-nav"><li class="flex-nav-prev"><a class="flex-prev" href="#"><i class="arrow_carrot-left"></i></a></li><li class="flex-nav-next"><a class="flex-next" href="#"><i class="arrow_carrot-right"></i></a></li></ul>'
                          ),
                          n = e(this).find(".gdlr-core-flexslider-nav");
                        n.length &&
                          (n.append(i),
                          (t.customDirectionNav = i.find(
                            ".flex-prev, .flex-next"
                          )));
                      })),
            "both" == e(this).attr("data-nav") ||
            "bullet" == e(this).attr("data-nav")
              ? (t.controlNav = !0)
              : (t.controlNav = !1),
            e(this).attr("data-thumbnail"))
          ) {
            var a = e(this).siblings(".gdlr-core-sly-slider");
            (t.manualControls = a.find("ul.slides li")), (t.controlNav = !0);
          }
          e(this).attr("data-vcenter-nav")
            ? (t.start = function (t) {
                t.directionNav &&
                  e(window).on("resize gdlr-core-element-resize", function () {
                    t.directionNav.each(function () {
                      var i = -(t.height() + e(this).outerHeight()) / 2;
                      e(this).css("margin-top", i);
                    });
                  }),
                  void 0 !== t.slides &&
                    (e(window).trigger("gdlr-core-element-resize"),
                    t.slides
                      .filter(".flex-active-slide")
                      .addClass("gdlr-core-active")
                      .siblings()
                      .removeClass("gdlr-core-active"));
              })
            : (t.start = function (t) {
                void 0 !== t.slides &&
                  (e(window).trigger("gdlr-core-element-resize"),
                  t.slides
                    .filter(".flex-active-slide")
                    .addClass("gdlr-core-active")
                    .siblings()
                    .removeClass("gdlr-core-active"));
              }),
            (t.after = function (e) {
              e.slides
                .filter(".flex-active-slide")
                .addClass("gdlr-core-active")
                .siblings()
                .removeClass("gdlr-core-active");
            }),
            e(this).find(".gdlr-core-outer-frame-element").length > 0 &&
              e(this).addClass("gdlr-core-with-outer-frame-element"),
            e(this).goodlayers_flexslider(t);
        }),
        e(this)
      );
    }),
    (e.fn.gdlr_core_isotope = function (t) {
      if ("function" == typeof e.fn.isotope) {
        if (void 0 === t) var i = e(this).find('[data-layout="masonry"]');
        else i = t.filter('[data-layout="masonry"]');
        i.each(function () {
          var t = e(this),
            i = t.width() / 60;
          t.isotope({
            itemSelector: ".gdlr-core-item-list",
            layoutMode: "masonry",
            masonry: { columnWidth: i },
          }),
            t.isotope(),
            t.children(".gdlr-core-item-list").gdlr_core_animate_list_item(),
            e(window).on("resize gdlr-core-element-resize", function () {
              (i = t.width() / 60), t.isotope({ masonry: { columnWidth: i } });
            });
        });
      }
      return e(this);
    }),
    (e.fn.gdlr_core_animate_list_item = function () {
      var t = e(this).get(),
        i = setInterval(function () {
          if (t.length > 0) {
            var n = e(t.shift());
            n.css({ "animation-duration": "600ms" }),
              n.addClass("gdlr-core-animate").css("webkit-animation-duration"),
              setTimeout(function () {
                n.css({ "animation-duration": "" })
                  .addClass("gdlr-core-animate-end")
                  .removeClass("gdlr-core-animate gdlr-core-animate-init");
              }, parseInt("600ms"));
          } else clearInterval(i);
        }, 200);
    }),
    (e.fn.gdlr_core_lightbox = function (t) {
      if ("function" == typeof e.iLightBox) {
        if (void 0 === t) var i = e(this).find(".gdlr-core-ilightbox");
        else i = t.filter(".gdlr-core-ilightbox");
        var n = {},
          a = [];
        void 0 !== gdlr_core_pbf.ilightbox_skin &&
          (n.skin = gdlr_core_pbf.ilightbox_skin),
          i.each(function () {
            e(this).attr("data-ilightbox-group")
              ? -1 == a.indexOf(e(this).attr("data-ilightbox-group")) &&
                a.push(e(this).attr("data-ilightbox-group"))
              : e(this).iLightBox(n);
          });
        for (var r in a)
          e(this)
            .find('.gdlr-core-ilightbox[data-ilightbox-group="' + a[r] + '"]')
            .iLightBox(n);
      }
      if (void 0 === t)
        var o = e(this).find(
          ".gdlr-core-image-overlay-center, .gdlr-core-image-overlay-center-icon"
        );
      else
        o = t.filter(
          ".gdlr-core-image-overlay-center, .gdlr-core-image-overlay-center-icon"
        );
      return (
        o.each(function () {
          if (e(this).hasClass("gdlr-core-image-overlay-center")) {
            var t = e(this).children(".gdlr-core-image-overlay-content"),
              i = e(this).outerHeight() - 2 * parseInt(t.css("bottom")),
              n = t.children(".gdlr-core-portfolio-icon-wrap"),
              a =
                (i - (t.outerHeight() - parseInt(n.css("margin-bottom")))) / 2;
            a > 20 && n.css("margin-bottom", a);
          } else
            e(this)
              .children(".gdlr-core-image-overlay-content")
              .each(function () {
                e(this).css({ "margin-top": -e(this).outerHeight() / 2 });
              });
        }),
        e(window).on("resize gdlr-core-element-resize", function () {
          o.each(function () {
            if (e(this).hasClass("gdlr-core-image-overlay-center")) {
              var t = e(this).children(".gdlr-core-image-overlay-content"),
                i = e(this).outerHeight() - 2 * parseInt(t.css("bottom")),
                n = t.children(".gdlr-core-portfolio-icon-wrap"),
                a =
                  (i - (t.outerHeight() - parseInt(n.css("margin-bottom")))) /
                  2;
              a > 20 && n.css("margin-bottom", a);
            } else
              e(this)
                .children(".gdlr-core-image-overlay-content")
                .each(function () {
                  e(this).css({ "margin-top": -e(this).outerHeight() / 2 });
                });
          });
        }),
        e(this)
      );
    }),
    (e.fn.gdlr_core_set_image_height = function () {
      var t = e(this).find("img");
      return (
        t.each(function () {
          var t = e(this).attr("width"),
            i = e(this).attr("height");
          if (t && i) {
            var n = e(this).parent(".gdlr-core-temp-image-wrap");
            n.length
              ? n.height((i * e(this).width()) / t)
              : ((n = e('<div class="gdlr-core-temp-image-wrap" ></div>')).css(
                  "height",
                  (i * e(this).width()) / t
                ),
                e(this).wrap(n));
          }
        }),
        e(window).on("resize gdlr-core-element-resize", function (i) {
          t.each(function () {
            e(this).parent(".gdlr-core-temp-image-wrap").length &&
              e(this).unwrap();
          }),
            e(window).unbind("resize", i.handleObj.handler, i);
        }),
        e(this)
      );
    }),
    (window.gdlr_core_set_full_height = function (e, t) {
      (this.elements =
        void 0 === t
          ? e.find(
              ".gdlr-core-wrapper-full-height, .gdlr-core-column-full-height"
            )
          : t.filter(
              ".gdlr-core-wrapper-full-height, .gdlr-core-column-full-height"
            )),
        this.elements.length && this.init();
    }),
    (gdlr_core_set_full_height.prototype = {
      init: function () {
        var t = this;
        t.resize(),
          e(window).on("load resize gdlr-core-element-resize", function () {
            t.resize();
          });
      },
      resize: function () {
        this.elements.each(function () {
          var t = e(this).attr("data-decrease-height")
            ? parseInt(e(this).attr("data-decrease-height"))
            : 0;
          if (
            (e(this).css("min-height", e(window).height() - t),
            e(this).hasClass("gdlr-core-full-height-center"))
          ) {
            e(this).children(".gdlr-core-full-height-pre-spaces").remove();
            var i =
              (e(this).height() -
                e(this)
                  .children(".gdlr-core-full-height-content")
                  .outerHeight(!0)) /
              2;
            i > 0 &&
              e(this).prepend(
                e(
                  '<div class="gdlr-core-full-height-pre-spaces" ></div>'
                ).height(i)
              );
          }
        });
      },
    }),
    (window.gdlr_core_sync_height = function (e, t) {
      void 0 === window.gdlr_core_sync_height_elem
        ? ((window.gdlr_core_sync_height_elem = this),
          (this.elements =
            void 0 === t
              ? e.find("[data-sync-height]")
              : t.filter("[data-sync-height]")),
          (this.elements_group = []),
          (this.container = e),
          this.init())
        : window.gdlr_core_sync_height_elem.reinit();
    }),
    (gdlr_core_sync_height.prototype = {
      init: function () {
        var t = this;
        t.group_elements(),
          t.set_height(),
          e(window).on("load resize gdlr-core-element-resize", function () {
            t.set_height();
          });
      },
      reinit: function () {
        (this.elements = this.container.find("[data-sync-height]")),
          this.group_elements(),
          this.set_height();
      },
      group_elements: function () {
        var t = this;
        t.elements.filter(".gdlr-core-flipbox-front").each(function () {
          -1 == t.elements_group.indexOf(e(this).attr("data-sync-height")) &&
            t.elements_group.push(e(this).attr("data-sync-height"));
        }),
          t.elements.each(function () {
            -1 == t.elements_group.indexOf(e(this).attr("data-sync-height")) &&
              t.elements_group.push(e(this).attr("data-sync-height"));
          });
      },
      set_height: function () {
        var t = this;
        t.elements
          .css("height", "auto")
          .children(".gdlr-core-sync-height-pre-spaces")
          .remove(),
          t.elements.find(".gdlr-core-sync-height-offset").remove();
        var n = t.elements;
        ("mobile-landscape" != i && "mobile-portrait" != i) ||
          (n = n.filter(".gdlr-core-flipbox-front, .gdlr-core-flipbox-back"));
        for (var a in t.elements_group) {
          var r = 0;
          n
            .filter('[data-sync-height="' + t.elements_group[a] + '"]')
            .each(function () {
              e(this).outerHeight() > r && (r = e(this).outerHeight());
            }),
            n
              .filter('[data-sync-height="' + t.elements_group[a] + '"]')
              .each(function () {
                var t = parseInt(r - e(this).outerHeight()),
                  i = e(this).find("[data-sync-height-offset]");
                if (
                  (i.length &&
                    t > 0 &&
                    e('<div class="gdlr-core-sync-height-offset" ></div>')
                      .css("height", t)
                      .insertBefore(i),
                  e(this).css("height", r),
                  e(this).hasClass("gdlr-core-flipbox-front") &&
                    e(this).parent().css("height", r),
                  e(this).is("[data-sync-height-center]"))
                ) {
                  var n = e(this).children(".gdlr-core-sync-height-content");
                  0 == n.length && (n = e(this).children());
                  var a = (r - n.outerHeight()) / 2;
                  (a -=
                    parseInt(e(this).css("padding-top")) +
                    parseInt(e(this).css("border-top-width"))) > 0 &&
                    e(this).prepend(
                      e(
                        '<div class="gdlr-core-sync-height-pre-spaces" ></div>'
                      ).css("padding-top", a)
                    );
                }
              });
        }
      },
    }),
    (e.fn.gdlr_core_ajax = function (t) {
      if (void 0 === t) var i = e(this).find("[data-ajax]");
      else i = t.filter("[data-ajax]");
      i.each(function () {
        var t = e(this);
        e(this).on("click", "a", function () {
          if (e(this).hasClass("gdlr-core-active")) return !1;
          e(this)
            .addClass("gdlr-core-active")
            .siblings()
            .removeClass("gdlr-core-active");
          var i = e(this).attr("data-ajax-name"),
            n = e(this).attr("data-ajax-value");
          return o(t, i, n), !1;
        }),
          e(this).on("change", "select", function () {
            var i = e(this).attr("data-ajax-name"),
              n = e(this).val();
            o(t, i, n);
          });
      });
    }),
    (e.fn.gdlr_core_dropdown_tab = function (t) {
      if (void 0 === t) var i = e(this).find(".gdlr-core-dropdown-tab");
      else i = t.filter(".gdlr-core-dropdown-tab");
      i.each(function () {
        var t = e(this).children(".gdlr-core-dropdown-tab-title"),
          i = t.children(".gdlr-core-head"),
          n = t.children(".gdlr-core-dropdown-tab-head-wrap"),
          a = e(this).children(".gdlr-core-dropdown-tab-content-wrap");
        t.click(function () {
          e(this).hasClass("gdlr-core-active")
            ? (e(this).removeClass("gdlr-core-active"), n.hide())
            : (e(this).addClass("gdlr-core-active"), n.slideDown(200));
        }),
          n.children().click(function () {
            i.html(e(this).html()),
              e(this)
                .addClass("gdlr-core-active")
                .siblings()
                .removeClass("gdlr-core-active");
            var t = a.children(
              '[data-index="' + e(this).attr("data-index") + '"]'
            );
            t.fadeIn(200).addClass("gdlr-core-active"),
              t.siblings().hide().removeClass("gdlr-core-active");
          });
      });
    }),
    gdlr_core_pbf.admin ||
      (e(document).ready(function () {
        e("body").each(function () {
          if (e(this).hasClass("gdlr-core-link-to-lightbox")) {
            var t = e(this)
              .find('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]')
              .not(".gdlr-core-ilightbox, .strip, [data-rel]")
              .addClass("strip gdlr-core-ilightbox");
            e(this).gdlr_core_lightbox(t);
          }
          var i = e(this).find(
            '.gdlr-core-js, iframe[src*="youtube"], iframe[src*="vimeo"]'
          );
          e(this).gdlr_core_content_script(i, !0),
            e(this).gdlr_core_counter_item(i),
            e(this).gdlr_core_typed_animation(i),
            e(this).gdlr_core_countdown_item(i),
            e(this).gdlr_core_alert_box_item(i),
            e(this).gdlr_core_accordion(i),
            e(this).gdlr_core_toggle_box(i),
            e(this).gdlr_core_divider(i),
            e(this).gdlr_core_flipbox(i),
            e(this).gdlr_core_skill_circle(i),
            e(this).gdlr_core_skill_bar(i),
            e(this).gdlr_core_tab(i),
            e(this).gdlr_core_dropdown_tab(i),
            e(this).gdlr_core_lightbox(i),
            e(this).gdlr_core_ajax(i),
            new a(e(this), i),
            new gdlr_core_set_full_height(e(this), i),
            new gdlr_core_sidebar_wrapper(e(this), i),
            new gdlr_core_sync_height(e(this), i),
            e(this).gdlr_core_parallax_background(i);
        });
      }),
      e(window).load(function () {
        e("body").each(function () {
          var t = e(this).find(".gdlr-core-js-2");
          e(this).gdlr_core_title_divider(t),
            e(this).gdlr_core_flexslider(t),
            e(this).gdlr_core_sly(t),
            e(this).gdlr_core_isotope(t);
        });
      }));
})(jQuery);
