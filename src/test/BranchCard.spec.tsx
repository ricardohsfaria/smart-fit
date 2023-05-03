import { render } from "@testing-library/react";
import BranchCard from '../components/BranchCard';

describe('BranchCard...', () => {
  it("should render the correct schedule", () => {
      const props = {
          opened: true,
          title: "Test Branch",
          address: "Pça. Nicola Vivilechio, 103 - Jardim Bom Tempo - Taboão da Serra, SP",
          mask: "required",
          towel: "recommended",
          fountain: "partial",
          lockerRoom: "allowed",
          morningSchedule: {
              weekdays: "Mon-Fri",
              hour: "8am-12pm"
          },
          nightSchedule: {
              weekdays: "Mon-Fri",
              hour: "6pm-10pm"
          },
          saturdaySchedule: {
              weekdays: "Sat",
              hour: "9am-1pm"
          },
          sundaySchedule: {
            weekdays: "Dom",
            hour: "6am-10am"
          }
      };  
      const { getByText, getByTestId } = render(<BranchCard {...props} />);  
      expect(getByText("Aberto")).toBeInTheDocument();
      expect(getByText("Test Branch")).toBeInTheDocument();
      expect(getByText("Pça. Nicola Vivilechio, 103 - Jardim Bom Tempo - Taboão da Serra, SP")).toBeInTheDocument();
      expect(getByTestId("required-mask")).toBeInTheDocument();
      expect(getByTestId("recommended-towel")).toBeInTheDocument();
      expect(getByTestId("partial-fountain")).toBeInTheDocument();
      expect(getByTestId("required-locker-room")).toBeInTheDocument();
      expect(getByText("Mon-Fri")).toBeInTheDocument();
      expect(getByText("8am-12pm")).toBeInTheDocument();
      expect(getByText("Mon-Fri")).toBeInTheDocument();
      expect(getByText("6pm-10pm")).toBeInTheDocument();
      expect(getByText("Sat")).toBeInTheDocument();
      expect(getByText("9am-1pm")).toBeInTheDocument();
      expect(getByText("6am-10am")).toBeInTheDocument();
  });
})
