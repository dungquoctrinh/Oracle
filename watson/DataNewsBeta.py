import json
from watson_developer_cloud import AlchemyDataNewsV1
import sys


def collectNews(company, timeBegin, timeEnd):
    alchemy_data_news = AlchemyDataNewsV1(api_key='d4a97f67bd08aa3720bd3be9dc5c92ad720f16fa')

    #results = alchemy_data_news.get_news_documents(start='now-60d', end='now', time_slice='12h')

    # print(json.dumps(results, indent=2))
    stock_code = 'AAPL'
    results = alchemy_data_news.get_news_documents(
    start=timeBegin,
    end=timeEnd,
    #start='1453334400',
    #end='1454022000',
    #time_slice='12h',
    return_fields=['enriched.url.title',
                   'enriched.url.url',
                   #'enriched.url.author',
                   #'enriched.url.publicationDate',
                   'enriched.url.entities.entity.sentiment.type',
                   #'enriched.url.keywords.keyword.sentiment.mixed'
                   'enriched.url.entities.entity.sentiment.score'
                   ],
    query_fields={'q.enriched.url.enrichedTitle.entities.entity': '|text=IBM,type=company|'})
    r = json.dumps(results, indent=2)
    return r


def parseNew(file):
    pass


def main(argv):
    company = "IBM"
    json_file = collectNews(company, 'now-60d', 'now')
    f = open('DataNewsBeta', 'w')
    f.write(str(json_file))
    print ("Complete Data Collecting")
    parseNew(json_file)

if __name__ == "__main__":
    main(sys.argv)


