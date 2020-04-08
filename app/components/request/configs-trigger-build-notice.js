import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import { pluralize } from 'ember-inflector';
import { STATUSES } from 'travis/components/request/configs';

export default Component.extend({
  tagName: '',

  configs: 0,
  status: null,
  customizing: equal('status', STATUSES.CUSTOMIZE),
  previewing: equal('status', STATUSES.PREVIEW),

  message: computed('customizing', 'previewing', 'configs', function () {
    if (this.previewing) {
      return 'The triggered build will have the following build config and job matrix.';
    }
    let configs = pluralize(this.configs + 1, 'config', { withoutCount: true });
    if (this.customizing) configs = `details and ${configs}`;
    return `Trigger a build request with the following build ${configs}`;
  }),
});