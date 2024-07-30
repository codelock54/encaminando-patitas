(window.webpackJsonp = window.webpackJsonp || []).push([
    [225], {
        2e3: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(11),
                o = r(636),
                c = r(0),
                d = r(12),
                l = r(65),
                m = r(644);
            class h {
                constructor() {
                    this.site = new c.T
                }
            }
            t.default = o.a.extend({
                name: "Page",
                data: () => new h,
                asyncData: e => Object(n.a)((function*() {
                    var {
                        $api: t,
                        $site: r,
                        $cookies: n,
                        $lcz: o,
                        params: m,
                        store: h,
                        error: f
                    } = e;
                    try {
                        var y = h.getters.getSite(n, r),
                            v = Object(l.a)({
                                store: h,
                                $cookies: n
                            }, null == r ? void 0 : r.id),
                            T = +c.fc[m.defaultPageType],
                            w = yield t.get(new c.nb({
                                pageType: T,
                                siteId: v
                            }));
                        return h.dispatch("setPage", w), {
                            site: y,
                            page: w
                        }
                    } catch (e) {
                        return null === d.a || void 0 === d.a || d.a.errorLog({
                            error_name: e.name,
                            message: e.message,
                            stack: e.stack,
                            status_code: 404,
                            source_dir: "pages/d/",
                            source_file: "_defaultPageType.tsx"
                        }), f({
                            statusCode: 404,
                            message: null == o ? void 0 : o.t("messages.pageNotFound")
                        })
                    }
                }))(),
                beforeDestroy() {
                    this.page = null
                },
                head: () => ({
                    meta: [{
                        hid: "robots",
                        name: "robots",
                        content: "noindex"
                    }]
                }),
                render(e) {
                    return e(m.a, {
                        attrs: {
                            site: this.site,
                            page: this.page
                        }
                    })
                }
            })
        },
        644: function(e, t, r) {
            "use strict";
            var n = r(6),
                o = r(2),
                c = r.n(o),
                d = r(5),
                l = r.n(d),
                m = r(77),
                h = r(18),
                f = r(14),
                y = r(12),
                v = r(670),
                T = n.componentFactory.mixin(h.D).create({
                    name: "WebSitePageTemplate",
                    props: {
                        site: c.a.ofType().optional,
                        page: c.a.ofType().required
                    },
                    head() {
                        var {
                            title: title,
                            meta: meta
                        } = Object(f.J)(this.page);
                        return {
                            title: title,
                            meta: meta
                        }
                    },
                    render(e) {
                        if (this.page) return e("div", {
                            class: l()(Object(f.i)(this.page)),
                            attrs: {
                                "data-page-template-type": this.page.pageTemplateType
                            }
                        }, [Object(f.K)(e, v.a, this.page, this.currentSite, m.a)]);
                        null === y.a || void 0 === y.a || y.a.warnLog({
                            message: "Page is unavailable!",
                            source_dir: "components/Builder/Templates/WebSitePageCategoryTemplate/",
                            source_file: "index.tsx"
                        })
                    }
                });
            t.a = T
        }
    }
]);
