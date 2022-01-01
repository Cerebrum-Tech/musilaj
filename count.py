import cv2
import numpy as np

img = cv2.imread("test2.png")
BLUE_MIN = np.array([50, 0, 0], np.uint8)
BLUE_MAX = np.array([255, 50, 50], np.uint8)

dst = cv2.inRange(img, BLUE_MIN, BLUE_MAX)
no_blue = cv2.countNonZero(dst) * 0.0447020408
sea_perthousand = no_blue / 11350
print('Müsilaj alanı: ' + str(no_blue) + ' hektar')
print("Marmara Denizi'nin müsilaj ile kaplı alanı: % " + str(sea_perthousand))
cv2.waitKey(0)
