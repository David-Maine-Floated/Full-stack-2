
json.array! @users do |user|
    json.extract! user,  :email, :username, :id
    json.photoUrl user.photo.attached? ? user.photo.url : nil
end

# json.array! @users do |user|
#   json.extract! user, :email, :username, :id
#   json.photoUrl user.photo.attached? ? user.photo.url : nil
# end