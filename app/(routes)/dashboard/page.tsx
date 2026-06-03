'use client'
import { useState } from 'react'
import { Button } from '../../../components/ui/button'

const Dashboard = () => {
  const [websiteList, setWebsiteList] = useState([])
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">My Website</h2>
        <Button>+ Website</Button>
      </div>
      {/* Empty State */}
      <div>
        {websiteList.length === 0 && (
          <div className="flex flex-col items-center justify-center p-4 p-8 border-2 border-dashed border-gray-300 rounded-lg mt-5">
            <img
              src="/empty-state.png"
              alt="Empty State"
              className="h-32 w-32"
            />
            <p className="mt-4 text-gray-500">
              You haven't added any websites yet.
            </p>
            <Button className='mt-4'>+ Website</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard