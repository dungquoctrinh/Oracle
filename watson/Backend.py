import sys
import datetime
import time

def get_sentiment(name, date):
    #day = str(time.mktime(datetime.datetime.strptime(date, "%d/%m/%Y").timetuple())).split(".")[0]
    day = int(time.mktime(datetime.datetime.strptime(date, "%d/%m/%Y").timetuple()))

    score = 0
    count = 0

    if name == "AAPL":
        open_path = '/home/kid/Github/Oracle/watson/amazon/apple.json'
    elif name == "IBM":
        open_path = '/home/kid/Github/Oracle/watson/' + "ibm.json"
    elif name == "AMZN":
        open_path = '/home/kid/Github/Oracle/watson/' + "amazon.json"
    elif name == "VRX":
        open_path = '/home/kid/Github/Oracle/watson/' + "valeant.json"
    elif name == "FIT":
        open_path = '/home/kid/Github/Oracle/watson/' + "fitbit.json"
    elif name == "UWTI":
        open_path = '/home/kid/Github/Oracle/watson/' + "oil.json"
    print day

def main(argv):
    get_sentiment("", '11/12/2016')

if __name__ == "__main__":
    main(sys.argv)
