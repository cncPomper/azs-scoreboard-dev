import functools
import time
import serial

# Config
PORT='COM2'
BAUDRATE=115200

#Port config
ser = serial.Serial(
  port=PORT,
  baudrate=BAUDRATE,
  parity=serial.PARITY_NONE,
  timeout=1,
  stopbits=serial.STOPBITS_ONE,
  bytesize=serial.EIGHTBITS
)

def updateScoreTime():
  if ser.isOpen():
      bytesToRead = ser.inWaiting()
      data = ser.read(bytesToRead)
      data = data.split(sep=b' ')

def read_clock():
  ser.open()

  while True:
    time.sleep(1)
    updateScoreTime()

  ser.close()

read_clock()





