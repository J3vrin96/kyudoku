import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Index from './index.vue';

describe('index.vue', () => {
	it('should render homepage with h1', () => {
		const wrapper = mount(Index, {
			global: {
				stubs: {
					AppAlert: true,
				},
			},
		});

		const h1 = wrapper.find('h1');

		expect(h1.exists()).toBe(true);
		expect(h1.text()).toBe('Welcome to the homepage');
	});
});
