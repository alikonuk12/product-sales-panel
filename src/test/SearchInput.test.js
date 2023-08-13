import { fireEvent, render } from '@testing-library/react';
import { SearchInput } from '../components';

describe("Search Product", () => {
    it("renders SearchInput", () => {
      const { getByRole } = render(<SearchInput />);
  
      const search = getByRole('textbox');  
      expect(search.value).toBe("");
      fireEvent.change(search, { target: { value: 'ABC' }});
      expect(search.value).toBe('ABC');
    });
});