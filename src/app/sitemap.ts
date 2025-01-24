import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: '', // 首页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'characters', // 角色介绍页
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'article', // 文章列表页
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'article/ninja-gaiden-2-release-2025', // 发售信息
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/ninja-gaiden-2-trailer-differences-2025', // 预告片分析
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'article/ninja-gaiden-2-hidden-details-2025', // 隐藏细节
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/combat-guide', // 战斗系统指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/character-abilities', // 角色技能指南
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'game/boss-strategies', // Boss战攻略
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'changelog', // 更新日志
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'privacy', // 隐私政策
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'terms', // 服务条款
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ];

  const sitemapData = sitemapRoutes.flatMap((route) => {
    const routeUrl = route.url === '' ? '' : `/${route.url}`;
    return {
      ...route,
      url: `https://ninjagaiden2.com${routeUrl}`,
    };
  });

  return sitemapData;
}
