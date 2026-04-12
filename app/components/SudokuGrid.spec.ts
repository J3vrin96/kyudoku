import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ref } from 'vue';
import SudokuGrid from "./SudokuGrid.vue";
import Select from './Select.vue';

describe('SudokuGrid', () => {
	beforeEach(() => {
		vi.stubGlobal('useState', (key: string, defaultValue: () => void) => {
			return ref(defaultValue?.());
		});

		vi.stubGlobal(
			'$fetch',
			vi.fn(() => Promise.resolve({ board: [] })),
		);

		vi.stubGlobal('useSudokuKeyboard', vi.fn());
	});

	it('should render the board container', () => {
		const wrapper = mount(SudokuGrid, {
			global: {
				components: {
					Select,
				},
				stubs: {
					Select: true,
				},
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
});

