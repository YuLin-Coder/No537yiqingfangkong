# 数据容器文件

import scrapy

class SpiderItem(scrapy.Item):
    pass

class QgsssjItem(scrapy.Item):
    # 全国确诊
    qgqz = scrapy.Field()
    # 境外输入
    jwsr = scrapy.Field()
    # 治愈人数
    zyrs = scrapy.Field()
    # 死亡人数
    swrs = scrapy.Field()

class GnssdtItem(scrapy.Item):
    # 地区
    diqu = scrapy.Field()
    # 确诊
    quezhen = scrapy.Field()
    # 治愈
    zhiyu = scrapy.Field()
    # 死亡
    siwang = scrapy.Field()

