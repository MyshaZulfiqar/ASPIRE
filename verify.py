# For cross verifying, whenever the user scans a QR code, gelocation of the device will be veriefied

checkIn_longitude = float(input())
checkIn_latitude = float(input())
print("CHECK IN LOCATION:\n", "Longitude = ", checkIn_longitude, "\n", "Latitude = ", checkIn_latitude)

checkInLocations = [checkIn_longitude, checkIn_latitude]

checkOut_longitude = float(input())
checkOut_latitude = float(input())
print("CHECK OUT LOCATION:\n", "Longitude = ", checkOut_longitude, "\n", "Latitude = ", checkOut_latitude)

checkOutLocations = [checkOut_longitude, checkOut_latitude]

submission = False

for i in range(len(checkInLocations)):
    if checkOutLocations[i] == checkInLocations[i]:
        submission = True

if submission == True:
    print("Form Submitted")
else:
    print("Form not submitted")

    




