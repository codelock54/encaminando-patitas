(window.webpackJsonp = window.webpackJsonp || []).push([
    [89], {
        2063: function(t, e, n) {
            "use strict";
            n.r(e);
            var l = n(6),
                d = n(2),
                o = n.n(d),
                c = n(30),
                r = l.componentFactory.create({
                    props: {
                        widget: o.a.ofType().required,
                        widgetIndex: o.a.ofType().default(0),
                        settings: o.a.ofType().required,
                        isEnabledAnimation: o.a.ofType().default(!1),
                        animateClassName: o.a.ofType().default("animate__fadeInUp")
                    },
                    computed: {
                        isEnabledDivider() {
                            var t, e, n;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.contactUsContactInformation) || void 0 === e || null === (n = e.isEnabledDivider) || void 0 === n ? void 0 : n.isEnabled
                        },
                        isEnabledOpeningHoursDivier() {
                            var t, e, n;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.contactUsOpeningHours) || void 0 === e || null === (n = e.isEnabledDivider) || void 0 === n ? void 0 : n.isEnabled
                        }
                    },
                    render(t) {
                        var e, n;
                        return t(c.mb, {
                            class: "contacts contacts-t7 contacts-t7-v1",
                            attrs: {
                                settings: this.settings
                            }
                        }, [t(c.lb, {
                            attrs: {
                                settings: this.settings
                            }
                        }, [t("div", {
                            class: "kmb-widget-flex-row"
                        }, [t("div", {
                            class: "lg-w-1-2 w-full w-item-0 lg-py-10 py-6"
                        }, [t("div", {
                            class: "kmb-md-widget-container break-words"
                        }, [t("div", {
                            directives: [{
                                name: "animate-onscroll",
                                value: {
                                    className: "animate__animated ".concat(this.animateClassName),
                                    isEnabled: this.isEnabledAnimation
                                }
                            }],
                            class: "kmb-widget-contact-us-wrap text-center kmb-widget-titles-info"
                        }, [t(c.hb, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                isEnabledDivider: this.isEnabledDivider,
                                value: this.settings.contactUsContactInformation.title
                            }
                        }), t(c.r, {
                            attrs: {
                                value: this.settings.contactUsContactInformation.description
                            },
                            class: "kmb-widget-description"
                        }), t(c.n, {
                            attrs: {
                                contactInformations: null === (e = this.settings.contactUsContactInformation) || void 0 === e || null === (n = e.contactInformation) || void 0 === n ? void 0 : n.items
                            },
                            class: "item-full-width flex flex-col items-center justify-center"
                        })])])]), t("div", {
                            class: "kmb-mini-banner-bg kmb-widget-no-radius lg-w-1-2 w-full lg-py-10 py-6"
                        }, [t("div", {
                            class: "kmb-md-widget-container break-words"
                        }, [t("div", {
                            directives: [{
                                name: "animate-onscroll",
                                value: {
                                    className: "animate__animated ".concat(this.animateClassName),
                                    isEnabled: this.isEnabledAnimation
                                }
                            }],
                            class: "kmb-widget-contact-us-wrap text-center kmb-widget-titles-info"
                        }, [t(c.hb, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                isEnabledDivider: this.isEnabledOpeningHoursDivier,
                                value: this.settings.contactUsOpeningHours.title
                            }
                        }), t("div", {
                            class: "flex justify-center text-left"
                        }, [t(c.K, {
                            attrs: {
                                value: this.settings.contactUsOpeningHours.openingHours,
                                isFullDateName: !0,
                                isWidget: !0
                            },
                            class: "kmb-widget-opening-hours-w-full"
                        })])])])])])])])
                    }
                });
            e.default = r
        }
    }
]);