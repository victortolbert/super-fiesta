import Vue from 'vue';

import LanguageParser from './LanguageParser';
import ParticipantDisplayNames from './ParticipantDisplayNames';
import GoogleAnalytics from './GoogleAnalytics';

Vue.mixin(LanguageParser);
Vue.mixin(ParticipantDisplayNames);
Vue.mixin(GoogleAnalytics);
