import ComboBox from '@/components/ui/ComboBox'
import { useDistributionMonthlyContext } from "@/contexes/distributionMonthlyContex";



function Compo_Months({ handleChange, compoTitle }: { handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void, compoTitle: string}) {
  const { showComboMonths } = useDistributionMonthlyContext();
  return (
    <div>
         {showComboMonths &&(<ComboBox
                  data={months}
                  labelTitle={compoTitle}
                  changeCompmEvent={handleChange}
                  id="month"
                  style={{ width: "auto",  }}
                />)}
    </div>
  )
}

export default Compo_Months

const months = [
 
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  
];