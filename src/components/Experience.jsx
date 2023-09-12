
import '../App.css';
import Job from './Job'
import Facebook from '../assets/facebook.png'
import Koalafi from '../assets/Koalafi.png'

export default function Experience() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-gray-900 dark:text-gray-200 rounded-lg md:rounded-[20px] shadow-lg p-4 md:p-6 gap-2 scroll-py-[10vh]">
      <div className="font-normal text-base md:text-2xl mb-2 mt-2">
        Where I've worked...
      </div>
      <Job image={Koalafi} company={"Koalafi"} descriptions={['Fintech', 'SQL']} title={'Marketing Manager'} dateRange={'2021 - 2022'} />
      <Job image={Facebook} company={"Meta (Facebook)"} descriptions={['UI/UX', 'XFN Collaboration']} title={'Content Designer'} dateRange={'2019 - 2021'} />
    </div>
  )
}