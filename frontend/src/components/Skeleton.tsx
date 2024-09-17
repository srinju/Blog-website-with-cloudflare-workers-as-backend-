
export const Skeleton = () => {
    return <div className="flex justify-center">
     <div className="grid grid-cols-12">
        <div className="animate-pulse p-8 space-y-6 col-span-8">
          {/* Skeleton for blog title */}
          <div className="h-10 bg-gray-300 rounded w-2/5"></div>
    
          {/* Skeleton for date */}
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    
          {/* Skeleton for blog content preview */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-full"></div>
            <div className="h-6 bg-gray-300 rounded w-4/5"></div>
          </div>
    
          {/* Skeleton for author section */}
          <div className="flex flex-col items-end col-span-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                {/* Author profile image */}
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
    
                {/* Author name */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                  <div className="h-4 bg-gray-300 rounded w-28"></div>
                </div>
              </div>
    
              {/* Author catchphrase */}
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        </div>
    </div>
</div>
}