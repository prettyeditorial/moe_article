#! /usr/bin/env python
#-*- coding: utf-8 -*-
import csv
import json
import random
import argparse

def main():
    emotions = ["sad", "smile"]
    parser = argparse.ArgumentParser()
    parser.add_argument('filename')
    opts = parser.parse_args()

    shasetsu = u'社説'.encode('cp932')

    with open(opts.filename, 'rb') as fp:
        reader = csv.reader(fp, delimiter="\t")
        for row in reader:
            id_ = row[0]
            date = row[1]  # date
            title = row[10] # title
            text =  row[11] # text
            emotion = 'sad'

            if shasetsu in title or shasetsu in text:
                str_ =  json.dumps(
                    {'date': date.decode('cp932').encode('utf8'),
                    'title': title.decode('cp932').encode('utf8'),
                    'text': text.decode('cp932').encode('utf8'),
                    'emotion': random.choice(emotions),
                    }
                )
                with open('json/{}.json'.format(id_), 'w+b') as fd:
                    fd.write(str_)


if __name__ == '__main__':
    main()
