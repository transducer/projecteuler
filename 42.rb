# The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:
#
# 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
#
# By converting each letter in a word to a number corresponding to its alphabetical position and adding these values 
# we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a 
# triangle number then we shall call the word a triangle word.
#
# Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

require 'mathn'

start = Time.now

class String
  def points
    each_char.map do |char|
      char.downcase.ord-96
    end.inject(0,:+)  
  end
end

names = File.read('words.txt').gsub(/"/,'').split(',').sort
triangles = (1..50).map {|n| (n/2)*(n+1)}

result = 0
names.each {|n| result += 1 if triangles.include?(n.points)}

puts "The answer is #{result} and it took #{(Time.now-start)*1000} milliseconds."