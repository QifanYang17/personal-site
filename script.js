const translations = {
  en: {
    pageTitle: "Qifan Yang | Data Science & AI",
    pageDescription:
      "Personal website for Qifan Yang, focused on data science, AI agents, machine learning, and analytics.",
    brandName: "Qifan Yang",
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    githubLinkLabel: "GitHub",
    heroBadge: "Northwestern MSDS · AI Track",
    floatingNote: "AI agents, data systems, and ideas that ship.",
    floatingChip: "Python · SQL · ML",
    eyebrow: "Data science graduate student",
    heroTitle: "Building practical AI, analytics, and machine learning experiences.",
    heroSubtitle:
      "I turn messy data, business workflows, and multimodal models into systems that are usable, measurable, and production-minded.",
    primaryCta: "View Experience",
    secondaryCta: "Contact Me",
    heroMetaLocation: "Chicago / Evanston",
    heroMetaFocus: "Data Science · AI Agents · Analytics",
    stackCard1: "AI Claims Agents",
    stackCard2: "Vision + Retrieval",
    stackCard3: "Data Pipelines",
    stackCard4: "Spatial Analytics",
    aboutTag: "Profile",
    aboutTitle: "A data scientist with engineering habits.",
    aboutBody1:
      "I am currently pursuing a Master of Data Science at Northwestern University on the AI track. My work spans machine learning, agent systems, computer vision, data processing, and business-focused analytics.",
    aboutBody2:
      "Across Bosch and Uber, I built pipelines for million-scale data, automated model evaluation, trained predictive models, and translated analysis into operational decisions.",
    stat1: "perception images processed in workflow design",
    stat2: "records cleaned and analyzed in operations analytics",
    stat3: "manual review time reduced through automation",
    focusTag: "Focus",
    focusTitle: "What I work on",
    focus1: "LLM agent workflows and multimodal reasoning",
    focus2: "Machine learning pipelines for prediction and evaluation",
    focus3: "Large-scale data cleaning, validation, and alignment",
    focus4: "Analytics storytelling with maps, dashboards, and KPIs",
    experienceTag: "Experience",
    experienceTitle: "Internships across data science, engineering, and analytics.",
    exp1Company: "Bosch China Innovation & Software Development Campus",
    exp1Date: "Jul 2024 - Jul 2025",
    exp1Title: "ADAS Data Scientist Intern",
    exp1Body:
      "Built large-scale ADAS data and model automation workflows spanning text-to-image retrieval, VLM inference, dataset processing, and object detection across million-image autonomous driving datasets.",
    exp1Detail1:
      "Integrated requests, qcloud_cos, yaml, PIL, and Qwen2.5 into a text-to-image retrieval pipeline to support text-generated image retrieval for over one million perception images, complex traffic scene mining, and automated VLM inference.",
    exp1Detail2:
      "Automated model evaluation with temporal filtering, score thresholding, and COS-based image caching, and leveraged FiftyOne for labeling quality checks to reduce manual review time by around 30%.",
    exp1Detail3:
      "Developed reusable Python scripts for multi-million JSON and sensor datasets, implementing parsing, timestamp alignment, rule-based validation, time-series filtering, and metadata extraction to improve data integrity and reduce preprocessing latency by around 10%.",
    exp1Detail4:
      "Trained a YOLOv9 object detection model with OpenCV on million-level autonomous driving image data, reaching 94% accuracy and 93% recall.",
    exp2Company: "Bosch Powertrain Systems Co., Ltd.",
    exp2Date: "Jun 2023 - Sep 2023",
    exp2Title: "Vehicle Driving Data Analyst Intern",
    exp2Body:
      "Built engine pump performance modeling and vehicle data analytics workflows by combining regression and ensemble modeling with dimensionality reduction on real driving-condition datasets.",
    exp2Detail1:
      "Built an engine pump performance prediction model using Scikit-learn, training and comparing Linear Regression, LASSO, Ridge, ElasticNet, Random Forest, and Gradient Boosting models while applying PCA and feature standardization to reduce multicollinearity and improve stability.",
    exp2Detail2:
      "Identified key sensor variables through feature importance analysis, PCA explained variance, and correlation analysis, providing data-driven support for sensor configuration optimization and cost reduction.",
    exp2Detail3:
      "Collected real vehicle driving-condition data with INCA and built a Pandas data cleaning and preprocessing pipeline covering missing value handling, outlier detection, and normalization.",
    exp3Company: "Uber Technologies, Inc.",
    exp3Date: "Sep 2022 - Dec 2022",
    exp3Title: "Operations Data Analyst Intern",
    exp3Body:
      "Built operational analytics and predictive modeling workflows on 850K+ user feedback and operational records to support customer experience analysis, experimentation, and KPI tracking.",
    exp3Detail1:
      "Cleaned and integrated 850K+ user feedback and operational records using Pandas, and applied NLTK-based sentiment analysis to quantify user satisfaction trends and support customer experience analysis.",
    exp3Detail2:
      "Designed and analyzed A/B tests to evaluate scheduling strategies and service process improvements, using statistical tests to measure their impact on order completion rates and user satisfaction.",
    exp3Detail3:
      "Built a data science modeling pipeline to predict user demand and operational metrics, applying LASSO and ElasticNet regularization with PCA for feature selection and dimensionality reduction.",
    exp3Detail4:
      "Trained and compared Random Forest, Gradient Boosting, and CNN models, improving model generalization through K-fold cross-validation and hyperparameter tuning.",
    exp3Detail5:
      "Evaluated models with MAE, RMSE, ROC-AUC, and F1 Score, and developed Matplotlib-based KPI visualizations to analyze operational trends.",
    projectsTag: "Projects",
    projectsTitle: "Selected work",
    project4Title: "RxPal (此间有序) — WeChat Mini-Program for Elderly Health Management",
    project4Body:
      "Independently designed and built a health management WeChat mini-program for elderly users with 8 pages and 485+ i18n translation keys, covering medication management, medical record OCR, health tracking, and family monitoring.",
    project4Detail1:
      "Built an OCR pipeline with Tencent Cloud GeneralBasicOCR API, cloud function regex parsing, and a three-stage capture-to-edit workflow.",
    project4Detail2:
      "Implemented cross-session persistence with Zustand persist middleware and a custom Taro Storage adapter.",
    project4Detail3:
      "Designed a lightweight i18n system with real-time Chinese/English switching and runtime TabBar updates.",
    project4Detail4:
      "Developed Canvas-based health trend charts and accessibility-focused UX for elderly users.",
    project4Alt: "RxPal medication management mobile interface",
    project1Meta:
      "Jan 2026 - Mar 2026 · Independent Project · LangGraph, LangChain, OpenAI, Python",
    project1Title: "LLM Multi-Agent Insurance Claims System",
    project1Body:
      "Designed and implemented an insurance claims multi-agent system with a BPMN-like workflow architecture, coordinating specialized agents across policy validation, damage assessment, authorization, claims processing, and notifications.",
    project1Detail1:
      "Built a RAG-based document QA workflow for insurance policy retrieval using document parsing, chunking, and context injection.",
    project1Detail2:
      "Developed a multimodal vehicle damage assessment agent with GPT-4o-mini to analyze accident images and generate payout-oriented evaluation reports.",
    project1Detail3:
      "Implemented a PyMuPDF document parsing pipeline to extract key fields from policy PDFs for automated policy validation.",
    project1Detail4:
      "Designed a state-driven orchestration mechanism so the full claims workflow follows approval logic deterministically.",
    project1Detail5:
      "Implemented tool-calling so LLM agents can invoke external tools for parsing, payment checks, and claims data processing.",
    project2Title: "Chicago Crime Data Visualization",
    project2Body:
      "Queried and processed crime data with PostgreSQL and Pandas, built Folium choropleth maps, identified high-risk blocks, and analyzed violent crime trends with rolling-window time series methods.",
    project2Alt:
      "Chicago crime map visualization with choropleth and highlighted locations",
    project2Alt2:
      "Chicago crime analysis map with district-level overlays and highlighted points",
    project3Title: "Data Science & Machine Learning Modeling Projects",
    project3Body:
      "Developed end-to-end pipelines for housing price prediction, retail sales analysis, public health datasets, and image recognition, covering data acquisition, EDA, feature engineering, ML modeling, deep learning, and model evaluation.",
    project3Detail1: "Built web scraping and preprocessing pipelines for 100K+ observations.",
    project3Detail2: "Used Box-Cox, LASSO, ElasticNet, and PCA for feature selection and dimensionality reduction.",
    project3Detail3: "Developed R Shiny visualizations and compared regression, tree, and classification models.",
    project3Detail4: "Trained TensorFlow CNN models with data augmentation and improved MAE by 11%.",
    project3Chip4: "Deep Learning",
    project3Chip5: "R Shiny",
    researchTag: "Research",
    researchTitle: "Research studies in transformers, 3D perception, and autonomous driving.",
    research1Kicker: "Independent Study",
    research1Meta: "Computer Vision · Transformers",
    research1Title: "DETR Architecture Study & Implementation",
    research1Body:
      "Studied and implemented the DETR (Detection Transformer) architecture, analyzing encoder-decoder transformers, multi-head attention, QKV projections, and feed-forward networks to understand end-to-end transformer-based object detection without anchor boxes or NMS.",
    research1Alt:
      "Object detection example with labeled cars, person, bicycle, and traffic light",
    research1Detail1: "Implemented the core encoder-decoder transformer flow to understand object queries and set prediction.",
    research1Detail2: "Analyzed multi-head attention, QKV projection logic, and FFN blocks at the module level.",
    research1Detail3: "Compared DETR's end-to-end design against anchor-based and NMS-dependent detection pipelines.",
    research1Chip2: "Transformers",
    research1Chip3: "Multi-Head Attention",
    research1Chip4: "Object Detection",
    research2Kicker: "Research Presentation",
    research2Meta: "Computer Vision · Autonomous Driving",
    research2Title: "3D Occupancy Perception Research",
    research2Body:
      "Studied vision-based 3D occupancy prediction methods for autonomous driving, analyzing voxel scene representations, semantic occupancy prediction, annotation pipelines, and the trade-offs between different perception architectures.",
    research2Alt:
      "3D occupancy perception diagram from multi-camera images and LiDAR points",
    research2Detail1: "Studied semantic occupancy prediction from multi-view camera images and voxel-based scene representations.",
    research2Detail2: "Examined depth inference, voxel-grid computation cost, and LiDAR-derived annotation challenges.",
    research2Detail3: "Compared BEV-based, TPV-based, and voxel-based modeling paradigms across capability and efficiency.",
    research2Detail4: "Analyzed label refinement methods including KNN voting, VDBFusion reconstruction, and image-guided voxel refinement.",
    research2Detail5: "Presented the paper and led discussion on vision-based vs LiDAR-based perception trade-offs and applications.",
    research2Chip1: "3D Occupancy",
    research2Chip4: "Autonomous Driving",
    educationTag: "Education",
    educationTitle: "Academic background",
    edu1Title: "Northwestern University",
    edu1Body: "Master of Data Science (AI Track), Sep 2025 - Sep 2026",
    edu2Title: "University of California, Davis",
    edu2Body: "Bachelor of Statistics (Data Science Track), Sep 2020 - Jun 2024",
    skillsTitle: "Core skills",
    skillsChip4: "Machine Learning",
    skillsChip5: "Deep Learning",
    skillsChip7: "Computer Vision",
    skillsChip8: "NLP",
    interestsTag: "Beyond Work",
    interestsTitle: "What keeps me human outside of datasets and models.",
    interestsBody:
      "I like having a life outside technical work. Music, sports, history, and motorsport all shape how I think, focus, and stay curious.",
    interestsAside: "A few recurring interests that keep my pace balanced off-screen.",
    interestsWord: "Offscreen",
    interest1Title: "Violin",
    interest1Body: "A way to stay patient, expressive, and detail-oriented.",
    interest2Title: "Basketball",
    interest2Body: "Competition, teamwork, and rhythm still matter off the screen.",
    interest3Title: "History",
    interest3Body: "I enjoy long-context stories, patterns, and cause-effect thinking.",
    interest4Title: "Formula 1",
    interest4Body: "A perfect mix of systems thinking, speed, engineering, and strategy.",
    contactTag: "Contact",
    contactTitle: "Open to full time jobs, projects, and collaboration.",
    contactWechat: "WeChat: Vader20010917",
    contactLocation: "Based in the Chicago area",
    skillsChip6: "AI Agents",
    toggleLabel: "Switch language"
  },
  zh: {
    pageTitle: "杨启帆 | 数据科学与人工智能",
    pageDescription:
      "杨启帆的个人网站，内容聚焦数据科学、AI 智能体、机器学习与数据分析。",
    brandName: "杨启帆",
    navAbout: "关于我",
    navExperience: "经历",
    navProjects: "项目",
    navContact: "联系",
    githubLinkLabel: "GitHub",
    heroBadge: "西北大学 数据科学硕士 · AI方向",
    floatingNote: "把 AI、数据系统和想法做成真正可用的东西。",
    floatingChip: "Python · SQL · 机器学习",
    eyebrow: "数据科学研究生",
    heroTitle: "专注于 AI、数据分析与机器学习的实用型构建者。",
    heroSubtitle:
      "我擅长把复杂数据、业务流程和多模态模型整理成可落地、可衡量、可扩展的系统。",
    primaryCta: "查看经历",
    secondaryCta: "联系我",
    heroMetaLocation: "芝加哥 / 埃文斯顿",
    heroMetaFocus: "数据科学 · AI 智能体 · 数据分析",
    stackCard1: "理赔智能体",
    stackCard2: "视觉与检索",
    stackCard3: "数据流程",
    stackCard4: "空间分析",
    aboutTag: "简介",
    aboutTitle: "偏工程化思维的数据科学学生。",
    aboutBody1:
      "我目前在美国西北大学攻读数据科学硕士，方向是人工智能。主修应用统计、机器学习、智能体系统、计算机视觉、数据处理以及面向业务的分析应用。",
    aboutBody2:
      "在博世和优步的实习中，我参与过百万级数据流程设计、模型评估自动化、预测建模和业务分析落地。",
    stat1: "图像级工作流处理规模",
    stat2: "运营分析中清洗与整合的记录量",
    stat3: "通过自动化降低的人工审核时间",
    focusTag: "方向",
    focusTitle: "我在做什么",
    focus1: "LLM 多智能体工作流与多模态推理",
    focus2: "机器学习建模、预测与评估流程",
    focus3: "大规模数据清洗、校验与时间对齐",
    focus4: "地图、指标和可视化驱动的分析表达",
    experienceTag: "实习经历",
    experienceTitle: "数据科学、数据工程与业务分析方向的实习经验。",
    exp1Company: "博世中国创新与软件开发中心",
    exp1Date: "2024.07 - 2025.07",
    exp1Title: "博世 ADAS 数据科学实习生",
    exp1Body:
      "围绕百万级自动驾驶图像数据，搭建了覆盖文本检索、VLM 推理、数据处理与目标检测训练的 ADAS 数据与模型自动化流程。",
    exp1Detail1:
      "将 requests、qcloud_cos、yaml、PIL 和 Qwen2.5 集成到自动化文本到图像检索流程中，实现超过 100 万张感知图像的文本生成图像检索、复杂交通场景数据挖掘与 VLM 推理自动化。",
    exp1Detail2:
      "通过时间序列过滤、得分阈值筛选与 COS 图像缓存实现模型评估自动化；利用 FiftyOne 进行标注质检，减少约 30% 审核时间。",
    exp1Detail3:
      "开发多种可复用 Python 脚本处理数百万级 JSON 与传感器数据集，实施解析、时间戳对齐、基于规则的校验、时间序列过滤与元数据提取，提升数据完整性并将预处理延迟降低约 10%。",
    exp1Detail4:
      "使用 OpenCV 在百万级自动驾驶图像数据集上训练 YOLOv9 目标检测模型，达到 94% 精确度与 93% 召回率。",
    exp2Company: "博世动力总成有限公司",
    exp2Date: "2023.06 - 2023.09",
    exp2Title: "博世 车辆驾驶数据分析实习生",
    exp2Body:
      "围绕发动机泵性能预测与车辆工况数据分析，搭建了从建模比较到变量筛选再到原始数据清洗的完整分析流程。",
    exp2Detail1:
      "基于 Scikit-learn 构建发动机泵性能预测模型，训练并比较 Linear Regression、LASSO、Ridge、ElasticNet 与 Random Forest / Gradient Boosting 模型，结合 PCA 降维与特征标准化缓解多重共线性并提升模型稳定性。",
    exp2Detail2:
      "通过特征重要性分析、PCA 方差贡献率与相关性分析识别关键传感器变量，为传感器配置优化与成本控制提供数据依据。",
    exp2Detail3:
      "使用 INCA 采集真实车辆行驶工况数据，通过 Pandas 构建包括缺失值处理、异常值检测与数据标准化的清理与预处理流程。",
    exp3Company: "优步",
    exp3Date: "2022.09 - 2022.12",
    exp3Title: "优步运营数据分析实习生",
    exp3Body:
      "围绕 85 万+ 条用户反馈与运营记录，搭建了从情感分析、实验评估到预测建模与 KPI 可视化的运营分析流程。",
    exp3Detail1:
      "使用 Pandas 清洗与整合 85 万+ 条用户反馈与运营数据，并结合 NLTK 情感分析量化用户满意度趋势，支持客户体验分析。",
    exp3Detail2:
      "设计并分析 A/B Test 实验评估调度策略与服务流程优化效果，通过统计检验验证策略对订单完成率与用户满意度的影响。",
    exp3Detail3:
      "构建数据科学建模流程对用户需求与运营指标进行预测建模，应用 LASSO / ElasticNet 正则化与 PCA 进行特征选择与降维。",
    exp3Detail4:
      "训练并比较 Random Forest / Gradient Boosting 和 CNN 等模型，并通过 K-fold 交叉验证与超参数调优提升模型泛化能力。",
    exp3Detail5:
      "使用 MAE、RMSE、ROC-AUC 与 F1 Score 进行模型评估，并利用 Matplotlib 构建运营 KPI 可视化与运营趋势分析。",
    projectsTag: "项目",
    projectsTitle: "代表项目",
    project4Title: "此间有序（RxPal）— 老年健康管理微信小程序",
    project4Body:
      "独立设计并开发面向老年用户的健康管理微信小程序，包含 8 个页面、485+ 条国际化翻译键，覆盖用药管理、病历识别、健康追踪和家人监护四大核心场景。",
    project4Detail1:
      "基于腾讯云 GeneralBasicOCR API 构建 OCR 识别流程，并通过云函数正则解析与前端三阶段交互实现拍照到结果编辑的完整闭环。",
    project4Detail2:
      "使用 Zustand persist 中间件与自定义 Taro Storage 适配器实现跨会话状态持久化，解决小程序冷启动数据丢失问题。",
    project4Detail3:
      "实现轻量级 i18n 方案，支持中英文实时切换，并在运行时动态更新 TabBar 标签。",
    project4Detail4:
      "基于 Canvas 2D API 开发多指标健康趋势图，并围绕老年用户做三档字体、大触控区和引导式教程优化。",
    project4Alt: "RxPal 此间有序小程序中的用药管理页面",
    project1Meta:
      "2026.01 - 2026.03 · 独立项目 · LangGraph, LangChain, OpenAI, Python",
    project1Title: "LLM 多智能体保险理赔系统",
    project1Body:
      "基于 LangGraph 与 LangChain 独立设计并实现保险理赔多智能体系统，搭建类似 BPMN 的业务流程架构，通过协同智能体完成保单验证、损伤评估、付款授权、理赔处理与通知流程。",
    project1Detail1:
      "构建 RAG 文档问答系统，通过文档解析、文本分块与上下文注入实现保单内容检索与精准问答。",
    project1Detail2:
      "构建多模态车辆损伤评估 Agent，使用 GPT-4o-mini 对事故车辆损伤严重程度进行评估，并生成包含赔付估算的保险评估报告。",
    project1Detail3:
      "使用 PyMuPDF 构建文档解析 pipeline，从保单 PDF 中提取关键字段，实现基于文档的保单自动验证流程。",
    project1Detail4:
      "设计 State-Driven Agent Orchestration 状态驱动编排机制，确保理赔流程严格按照审批逻辑执行。",
    project1Detail5:
      "实现 Tool Calling 机制，使 LLM 智能体能够调用外部工具进行文档解析、支付校验与数据处理。",
    project2Title: "芝加哥犯罪数据可视化",
    project2Body:
      "使用 PostgreSQL 与 Pandas 处理犯罪数据，构建 Folium 分级设色地图，识别高风险街区，并通过滚动窗口方法分析暴力犯罪趋势。",
    project2Alt: "芝加哥犯罪数据地图可视化截图，包含分级设色和重点位置标注",
    project2Alt2: "芝加哥犯罪分析地图截图，展示分区叠层与重点位置标注",
    project3Title: "数据科学与机器学习建模项目",
    project3Body:
      "围绕房价预测、零售销售分析、公共健康数据与图像识别任务，搭建完整数据科学与机器学习流程，覆盖数据采集、EDA、特征工程、机器学习建模、深度学习训练与模型评估。",
    project3Detail1: "构建爬虫与预处理流程，处理 10 万+ 级别观测数据。",
    project3Detail2: "结合 Box-Cox、LASSO、ElasticNet 和 PCA 完成变量筛选与降维。",
    project3Detail3: "开发 R Shiny 可视化，并比较回归、树模型和分类模型表现。",
    project3Detail4: "训练 TensorFlow CNN 并结合数据增强，使 MAE 降低 11%。",
    project3Chip4: "深度学习",
    project3Chip5: "R Shiny",
    researchTag: "研究",
    researchTitle: "围绕 Transformer、3D感知与自动驾驶方向的研究学习",
    research1Kicker: "独立研究",
    research1Meta: "计算机视觉 · Transformer",
    research1Title: "DETR 架构研究与实现",
    research1Body:
      "研究并实现 DETR（Detection Transformer）架构，分析 encoder-decoder Transformer、多头注意力、QKV 投影和前馈网络（FFN），理解在无需 anchor boxes 或 NMS 的情况下如何完成端到端 Transformer 目标检测。",
    research1Alt: "目标检测示例图，标注了车辆、行人、自行车和交通灯",
    research1Detail1: "实现核心 encoder-decoder Transformer 流程，理解 object queries 与 set prediction 机制。",
    research1Detail2: "从模块层面分析 multi-head attention、QKV 投影逻辑与 FFN 结构。",
    research1Detail3: "对比 DETR 与依赖 anchor boxes 和 NMS 的传统检测流程之间的差异。",
    research1Chip2: "Transformer",
    research1Chip3: "多头注意力",
    research1Chip4: "目标检测",
    research2Kicker: "研究汇报",
    research2Meta: "计算机视觉 · 自动驾驶",
    research2Title: "三维 Occupancy 感知研究",
    research2Body:
      "围绕自动驾驶中的视觉 3D occupancy prediction 方法开展研究，分析 voxel 场景表示、semantic occupancy prediction、标注流程以及不同三维感知架构之间的能力与效率权衡。",
    research2Alt: "三维 Occupancy 感知示意图，展示多相机图像、激光点云与生成的占据空间",
    research2Detail1: "研究基于多视角相机图像的 semantic occupancy prediction 与 voxel 场景表示方法。",
    research2Detail2: "分析从 2D 图像恢复深度、3D voxel 网格计算成本以及基于 LiDAR 点云的大规模标注挑战。",
    research2Detail3: "比较 BEV-based、TPV-based 与 voxel-based 架构在表达能力和计算效率上的取舍。",
    research2Detail4: "梳理 KNN voting、VDBFusion reconstruction 与 image-guided voxel refinement 等标签优化方法。",
    research2Detail5: "进行论文汇报并主导视觉感知与 LiDAR 感知方案的技术讨论，说明二者在真实场景中的取舍与应用。",
    research2Chip1: "三维 Occupancy",
    research2Chip4: "自动驾驶",
    educationTag: "教育背景",
    educationTitle: "学术背景",
    edu1Title: "美国西北大学",
    edu1Body: "数据科学硕士（人工智能方向），2025.09 - 2026.09",
    edu2Title: "加州大学戴维斯分校",
    edu2Body: "统计学学士（数据科学方向），2020.09 - 2024.06",
    skillsTitle: "核心技能",
    skillsChip4: "机器学习",
    skillsChip5: "深度学习",
    skillsChip6: "AI 智能体",
    skillsChip7: "计算机视觉",
    skillsChip8: "自然语言处理",
    interestsTag: "兴趣",
    interestsTitle: "在数据和模型之外，也保留真实而具体的生活。",
    interestsBody:
      "激励我持续探索和学习的动力引擎，来自我多样化的个人爱好",
    interestsAside: "这些兴趣会反过来塑造我的节奏、耐心和判断方式。",
    interestsWord: "生活",
    interest1Title: "小提琴",
    interest1Body: "让我保持耐心、表达力和对细节的敏感度。",
    interest2Title: "篮球",
    interest2Body: "团队感、对抗感和节奏感都很重要。",
    interest3Title: "历史",
    interest3Body: "我喜欢长时间尺度下的故事、规律和因果关系。",
    interest4Title: "F1 赛车",
    interest4Body: "速度、工程、系统协同和策略判断的结合很吸引我。",
    contactTag: "联系",
    contactTitle: "欢迎全职工作、项目合作与交流机会。",
    contactWechat: "微信：Vader20010917",
    contactLocation: "目前在芝加哥地区",
    toggleLabel: "切换语言"
  }
};

const toggle = document.querySelector(".lang-toggle");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const translatableAltNodes = document.querySelectorAll("[data-i18n-alt]");
const descriptionTag = document.querySelector('meta[name="description"]');

let language = "en";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = nextLanguage === "en" ? "en" : "zh-CN";
  document.body.dataset.language = nextLanguage;
  document.title = translations[nextLanguage].pageTitle;

  if (descriptionTag) {
    descriptionTag.setAttribute("content", translations[nextLanguage].pageDescription);
  }

  for (const node of translatableNodes) {
    const key = node.dataset.i18n;
    const value = translations[nextLanguage][key];
    if (value) {
      node.textContent = value;
    }
  }

  for (const node of translatableAltNodes) {
    const key = node.dataset.i18nAlt;
    const value = translations[nextLanguage][key];
    if (value) {
      node.setAttribute("alt", value);
    }
  }

  toggle.textContent = nextLanguage === "en" ? "中文" : "EN";
  toggle.setAttribute("aria-label", translations[nextLanguage].toggleLabel);
}

toggle.addEventListener("click", () => {
  applyLanguage(language === "en" ? "zh" : "en");
});

applyLanguage("en");
