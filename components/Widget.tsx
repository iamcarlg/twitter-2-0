import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widget =  () => {
  return (
    <div className='col-span-2 mt-2 hiddent items-start px-2 lg:inline'>
        
        {/* Search bar */}
        <div className='flex items-center space-x-2'>
            <SearchIcon className='h-5 w-5 flex-shrink-0 text-gray-400'/>
            <input 
                type="text" 
                className='bg-transparent outline-none'
                placeholder='Search Twitter'/>
        </div>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="ElonMusk"
            options={{height: 1000}}
        />
        
    </div>
  )
}

export default Widget
