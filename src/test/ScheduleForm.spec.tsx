import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SearchBranches from "../SearchBranches";
// import userEvent from '@testing-library/user-event';

// test('sum', () => {
//     const { getAllByText } = render(<ScheduleForm />);
// })

// describe('The schedule page...', () => {
//     it('should clear the checkboxes when "LIMPAR" is clicked', () => {
//         render(<SearchBranches />);

//         const morningCheckbox = screen.getByRole('checkbox', { name: /manhã/i });
//         const clearButton = screen.getByRole('button', { name: /limpar/i });
        
//         userEvent.click(morningCheckbox);
//         userEvent.click(clearButton);

//         expect(morningCheckbox).not.toBeChecked();
//     });
// })


    // Tests that all components render without errors. 
    it("test_all_components_render", () => {
        render(<SearchBranches />);
        expect(screen.find(Header)).toHaveLength(1);
        expect(screen.find('h1')).toHaveLength(2);
        expect(screen.find(ScheduleForm)).toHaveLength(1);
        expect(screen.find(Rules)).toHaveLength(1);
        expect(screen.find(Branches)).toHaveLength(1);
        expect(screen.find(Footer)).toHaveLength(1);
    });

    // Tests that the function handles the case where no initial branches are returned from API. 
    it("test_no_initial_branches", async () => {
        const mockSetInitialBranches = jest.fn();
        const mockGetBranches = jest.fn().mockResolvedValue({ locations: [] });
        const mockUseContext = jest.fn().mockReturnValue({
            allBranches: [],
            setAllBranches: jest.fn(),
            initialBranches: [],
            setInitialBranches: mockSetInitialBranches,
            selectedSchedule: '',
            branches: [],
            setBranches: jest.fn(),
        });
        useContext.mockImplementationOnce(mockUseContext);
        getBranches.mockImplementationOnce(mockGetBranches);

        const wrapper = shallow(<SearchBranches />);
        await flushPromises();

        expect(mockSetInitialBranches).toHaveBeenCalledWith([]);
    });

        // Tests that the header logo is rendered correctly. 
        it("test_search_branches_header_logo", () => {
            render(<SearchBranches />);
            const logo = screen.getByRole('banner');
            expect(logo.src('src')).toEqual(Logo);
            expect(logo.prop('alt')).toEqual('smart fit');
        });