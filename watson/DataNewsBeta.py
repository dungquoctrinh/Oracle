import json
from watson_developer_cloud import AlchemyDataNewsV1
import sys
import xml.etree.ElementTree as xmlParser
from bs4 import  BeautifulSoup as bs


def collectNews(company, timeBegin, timeEnd):
    #change the key for the API in here. This is the AlchemyDataNews
    KEY = '554259945902490161462f7e78bbf5829106ee4f'
    alchemy_data_news = AlchemyDataNewsV1(api_key=KEY)

    #results = alchemy_data_news.get_news_documents(start='now-60d', end='now', time_slice='12h')
    # print(json.dumps(results, indent=2))
    company_query = '|text=' + company + ',type=company|'
    results = alchemy_data_news.get_news_documents(
    start=timeBegin,
    end=timeEnd,

    #start='1453334400',
    #end='1454022000',
    #time_slice='12h',
    return_fields=[#'enriched.url.title',
                   #'enriched.url.url',
                   #'enriched.url.author',
                   #'enriched.url.publicationDate',
                   'enriched.url.entities.entity.sentiment.type',
                   #'enriched.url.keywords.keyword.sentiment.mixed'
                   'enriched.url.entities.entity.sentiment.score'
                   ],
    query_fields={'q.enriched.url.enrichedTitle.entities.entity': company_query})
    r = json.dumps(results, indent=2)
    return r


def parseNew(data):
    """
    :param file: json file
    :return: sentiment analysis
    """
    score = 0
    count = 0
    #data = json.loads(file)



    for x in data['result']['docs']:
        for y in x['source']['enriched']['url']['entities']:
            score +=(y['sentiment']['score'])
            count+=1

    return score/count


def main(argv):
    company = "Apple"
    json_file = collectNews(company, 'now-60d', 'now')
    f = open('DataNewsBeta.json', 'w')
    f.write(str(json_file))
    print ("Complete Data Collecting")
    print parseNew(json_file)

if __name__ == "__main__":
    main(sys.argv)


