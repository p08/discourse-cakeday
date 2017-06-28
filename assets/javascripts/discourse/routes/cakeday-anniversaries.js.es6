export default Discourse.Route.extend({
  queryParams: {
    month: { refreshModel: true }
  },

  refreshQueryWithoutTransition: true,

  beforeModel() {
    if (!this.siteSettings.cakeday_enabled) {
      this.transitionTo("unknown", window.location.pathname.replace(/^\//, ''));
    }
  },
  
  model(params) {
    params.timezone_offset = (new Date().getTimezoneOffset());
    return this.store.find("anniversary", params);
  },

  titleToken() {
    return I18n.t("anniversaries.title");
  }
});
