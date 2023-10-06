class MyHashMap(object):

    def __init__(self):
        self.storage = {}

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: None
        """
        self.storage[key] = value



    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        return self.storage.get(key, -1)


    def remove(self, key):
        """
        :type key: int
        :rtype: None
        """
        if key in self.storage:
            del self.storage[key]


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)