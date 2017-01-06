import Ember from 'ember';

export default Ember.Controller.extend({
  sidebarOpen: true,

  sidebarClass: Ember.computed('sidebarOpen', function () {
    const sidebarOpen = this.get('sidebarOpen');
    const colSmWidth = sidebarOpen ? '3' : '1';
    return `col-sm-${colSmWidth} ` + (sidebarOpen ? 'col-md-2' : '');
  }),

  contentClass: Ember.computed('sidebarOpen', function () {
    const sidebarOpen = this.get('sidebarOpen');
    const colSmWidth = sidebarOpen ? '9' : '11';
    const colSmOffset = sidebarOpen ? '3' : '11';
    return `col-sm-${colSmWidth} col-sm-offset-${colSmOffset} ` + (sidebarOpen ? 'col-md-10 col-md-offset-2' : '');
  }),

  actions: {
    toggleSidebar() {
      this.toggleProperty('sidebarOpen');
    }
  }
});
