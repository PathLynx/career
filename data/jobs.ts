// data/jobs.ts

import { Job } from "types"

// data/jobs.ts

export const JOBS: Job[] = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    description:
      "我们正在寻找一位对人工智能充满热情,并拥有深厚技术功底的高级前端开发工程师。理想的候选人应具备扎实的计算机科学基础,至少5年的前端开发经验,精通React、Vue等现代开发框架及TypeScript,并对深度学习和大模型有基础理解和实践兴趣。我们特别欣赏那些具有跨平台开发经验、熟练使用AI开发工具,并具备出色团队合作精神和自我驱动力的候选人。此外,候选人需要精通海内外项目的开发和管理。加入我们,您将参与前沿的人工智能技术探索之旅,共同推动技术进步。",
    location: "Hangzhou, China",
    responsibilities: [
      "负责前端技术选型及开发工作",
      "通用组件、类库编写,提升开发效率和质量",
      "通过技术手段,提升用户体验并满足高性能要求",
      "具有较强的新技术学习能力,并能将新技术应用到实际项目中",
      "负责团队 AI 相关的前端项目开发",
      "负责团队海外项目的研发",
      "负责团队小程序相关项目的开发",
    ],
    qualifications: [
      "拥有计算机科学或相关专业的本科及以上学历,具备扎实的计算机基础知识,对数据结构、网络等核心概念有深刻理解",
      "至少5年以上（推荐8年以上）的前端开发工作经验,能够展示出丰富的项目实践和成功案例",
      "熟悉前端相关技术栈（HTML、CSS、JavaScript）,有扎实的代码功底和良好的上层设计能力",
      "熟悉常见的语言增强技术（TypeScript、Less 或 Sass、TailwindCSS 等）",
      "熟悉常用框架（React、Vue3）的实现原理及开发模式",
      "熟悉常见的小程序开发框架（Uniapp、Taro）等",
      "熟悉 SSR 开发框架（Next.js、Remix.js）等",
      "熟悉常用的 UI 框架（Ant Design）等",
      "熟悉前端工程化相关技术（Webpack、Vite、CI/CD、Docker、Nginx ）等",
      "对前端相关技术抱有好奇心,持续关注前沿技术",
      "具有出色的架构设计和方案设计能力,能够独立负责项目或业务领域,快速识别问题并制定有效的解决方案",
      "具备强烈的自我驱动力和责任感,能够主动深入了解业务需求,并与团队成员进行有效沟通合作",
      "对AI技术有浓厚兴趣和一定的理解,特别是如何将AI元素融合到前端开发中以提升用户体验和产品价值",
      "优秀的团队合作精神和沟通能力,能够在跨职能团队中有效协作,推动项目向前发展",
    ],
    extras: [
      "有做过票务订座类（如大麦网）项目经验优先",
      "有做过 AI 领域的前端项目经验优先",
      "有做过海外 Shopify 电商相关项目经验优先（Remix.js 、Liquid ）等",
    ],
    roadmap: "https://roadmap.sh/r/embed?id=669632182b17b182cb03592d",
  },
  {
    slug: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    department: "Engineering",
    description:
      "我们正在寻找一位对人工智能充满热情,并拥有深厚技术功底的高级后端开发工程师。理想的候选人应具备扎实的计算机基础,至少5年的Java开发经验,精通Spring、Spring Boot、Spring Cloud等常用微服务开发框架,并掌握Python开发技能。候选人需要熟悉项目的全流程开发。我们特别欣赏那些具有微服务架构经验、熟练使用Docker和Kubernetes,并具备出色团队合作精神和自我驱动力的候选人。此外,候选人需要有跨国团队的沟通协作经验。加入我们,您将参与前沿的人工智能技术探索之旅,共同推动技术进步。",
    location: "Hangzhou, China",
    responsibilities: [
      "负责新项目(AIGC相关项目和海外相关项目)从0到1的全流程开发,包括需求分析、系统设计、编码实现、测试、部署及维护",
      "深入发掘和分析业务需求,撰写技术方案和系统设计",
      "不断学习新兴技术,支持公司业务的持续创新。",
      "设计、管理及维护公司数据库架构,保障数据安全性和稳定性。",
      "与团队成员紧密协作,共同解决技术挑战,确保项目顺利进行。",
      "负责项目的性能优化和技术调研",
    ],
    qualifications: [
      "计算机或相关专业全日制本科及以上学历",
      "至少5年及以上实际开发或架构经验",
      "熟练掌握Java EE技术体系,对JVM、线程池、JUC、NIO等有深入的理解和项目实践经验,具有实际项目JVM性能排查和调优经验",
      "掌握第二开发语言python ,熟悉常用Python框架,如Django、Flask等,能够用python 进行项目开发",
      "熟练使用Spring、Spring Boot、Spring Cloud等主流框架,至少精通一种数据库,比如MySQL等,具备SQL优化经验",
      "有微服务开发经验,在项目中使用过微服务相关组件(Nacos, Feign, Gateway, RocketMQ, Seata, Sentinel)或者看过相关组件源码",
      "熟悉微服务架构设计和容器化技术 如:Docker、Kubernetes 等",
      "熟练使用Linux操作系统和常用命令",
      "熟练使用阿里云或其他云服务对项目进行持续集成和部署",
      "流利的英语沟通能力,能够进行跨国团队的沟通协作和海外相关技术文档阅读和技术调研选型等等",
    ],
    extras: [
      "有过AIGC项目, 大模型训练, dify开发, Langchain接入",
      "有海外独立站Shopify App, Custom Storefront开发经验者优先",
      "等相关海外或者AI项目开发经验者优先",
      "在开源社区活跃,有代码贡献或技术文章发表或有基于开源项目进行二次开发的经验",
    ],
    roadmap: "https://roadmap.sh/r/embed?id=669631052b17b182cb0326e3",
  },
]
