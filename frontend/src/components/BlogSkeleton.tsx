
export const BlogSkeleton = () => {
    return <div className="flex justify-center">
        <div className="space-y-4 p-4">
          {/* Skeleton for each blog */}
          <div className="p-4 border-b border-gray-200">
            {/* Author info skeleton */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-full h-10 w-10 animate-pulse"></div>
              <div className="space-y-2">
                <div className="bg-gray-300 h-4 w-24 rounded animate-pulse"></div>
                <div className="bg-gray-300 h-4 w-16 rounded animate-pulse"></div>
              </div>
            </div>
    
            {/* Title skeleton */}
            <div className="mt-4">
              <div className="bg-gray-300 h-6 w-48 rounded animate-pulse"></div>
            </div>
    
            {/* Content preview skeleton */}
            <div className="mt-2">
              <div className="bg-gray-300 h-4 w-full rounded animate-pulse"></div>
              <div className="bg-gray-300 h-4 w-5/6 rounded animate-pulse mt-2"></div>
            </div>
    
            {/* Read time and date skeleton */}
            <div className="mt-2 flex space-x-2">
              <div className="bg-gray-300 h-4 w-12 rounded animate-pulse"></div>
              <div className="bg-gray-300 h-4 w-24 rounded animate-pulse"></div>
            </div>
          </div>
    
          {/* Duplicate skeleton for another blog entry */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-300 rounded-full h-10 w-10 animate-pulse"></div>
              <div className="space-y-2">
                <div className="bg-gray-300 h-4 w-24 rounded animate-pulse"></div>
                <div className="bg-gray-300 h-4 w-16 rounded animate-pulse"></div>
              </div>
            </div>
    
            <div className="mt-4">
              <div className="bg-gray-300 h-6 w-48 rounded animate-pulse"></div>
            </div>
    
            <div className="mt-2">
              <div className="bg-gray-300 h-4 w-full rounded animate-pulse"></div>
              <div className="bg-gray-300 h-4 w-5/6 rounded animate-pulse mt-2"></div>
            </div>
    
            <div className="mt-2 flex space-x-2">
              <div className="bg-gray-300 h-4 w-12 rounded animate-pulse"></div>
              <div className="bg-gray-300 h-4 w-24 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
    </div>
}