def searchRange(nums, target):
  left = 0
  right = len(nums)- 1
  start = -1
  end = -1

  while left <= right:
      mid = (left + right) // 2

      if nums[mid] == target:
          start = mid
          while nums[start - 1] == target:
              start-=1

          end = mid
          while nums[end + 1] == target:
              end+=1

          break
      elif nums[mid] > target:
          right = mid - 1
      else:
          left = mid + 1

  return [start, end]
