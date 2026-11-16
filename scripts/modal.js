// Dados dos Projetos

const dataProjects = [
    {
        title: 'Gestão de Solicitações Internas',
        date: 'Projeto Full-Stack',
        description: `Aplicação Web Full-Stack moderna para gerenciamento e acompanhamento de chamados e solicitações corporativas internas, substituindo processos informais (e-mails e planilhas). <br><br>
        <b>Principais funcionalidades:</b><br>
        • Painel dinâmico com filtros ágeis por título, prioridade, status e ordenação;<br>
        • Fluxo de triagem, análise de justificativas e decisão;<br>
        • Dashboard gerencial com métricas de solicitações em tempo real;<br>
        • Autenticação e segurança com emissão e validação de tokens JWT (JSON Web Tokens);<br>
        • Banco de dados relacional com script de migração e seeds iniciais.<br><br>
        <b>Arquitetura &amp; Tecnologias:</b><br>
        • <b>Frontend:</b> Next.js 16 (React 19), TypeScript, Tailwind CSS, Lucide React, React Hot Toast;<br>
        • <b>Backend:</b> PHP 8, Slim Framework 4 (PSR-7), PDO com Prepared Statements, Firebase JWT, Dotenv;<br>
        • <b>Banco de Dados:</b> MySQL.`,
        videoSrc: '',
        coverImg: 'assets/projects/solicitacoes_internas.svg',
        repository: 'https://github.com/jeansf26/Solicitacoes_Internas',
        site: ''
    },
    {
        title: 'MovieMatcher AI',
        date: 'Machine Learning & NLP',
        description: `Sistema inteligente para busca e recomendação de filmes semelhantes a partir de um título escolhido do catálogo, utilizando processamento de linguagem natural e aprendizado de máquina.<br><br>
        <b>Como funciona:</b><br>
        • Vetorização do catálogo com matriz TF-IDF (Term Frequency - Inverse Document Frequency);<br>
        • Comparação vetorial analítica através de produto escalar que representa a similaridade de cosseno;<br>
        • Retorno instantâneo dos 5 filmes com maior afinidade percentual em relação ao título selecionado;<br>
        • API RESTful de alta performance desenvolvida com FastAPI;<br>
        • Dados pré-processados otimizados em formato Parquet e Joblib.<br><br>
        <b>Tecnologias:</b> Python, FastAPI, Scikit-Learn (TF-IDF), Parquet, Joblib, JavaScript, HTML5/CSS3.`,
        videoSrc: '',
        coverImg: 'assets/projects/MovieMatcher.svg',
        repository: 'https://github.com/jeansf26/MovieMatcher',
        site: 'https://jeansf26.github.io/MovieMatcher/'
    },
    {
        title: 'Adaline: Rede Neural Linear',
        date: 'Inteligência Artificial',
        description: `Implementação computacional e matemática da rede neural artificial Adaline (Adaptive Linear Neuron), desenvolvida do zero em Python puro utilizando NumPy e cálculo analítico de gradiente descendente.<br><br>
        <b>Destaques do projeto:</b><br>
        • Formulação matemática com combinação linear: <code>y_in = (X · w) + b</code>;<br>
        • Regra Delta (Widrow-Hoff) para atualização ponderada de pesos sinápticos e bias;<br>
        • Critério de parada antecipada baseado na variação do Erro Quadrático Médio (MSE);<br>
        • Geração de gráficos com Matplotlib para visualização da reta/fronteira de decisão e evolução da curva de erro quadrático ao longo das épocas.<br><br>
        <b>Tecnologias:</b> Python, NumPy, Matplotlib, Redes Neurais Artificiais, Otimização Matemática.`,
        videoSrc: '',
        coverImg: 'assets/projects/rede_adaline.svg',
        repository: 'https://github.com/jeansf26/Rede_adaline',
        site: ''
    },
    {
        title: 'Scraping Amazon',
        date: 'Web Scraping / Full-Stack',
        description: `Aplicação Web Full-Stack para raspagem e extração de produtos da Amazon, composta por backend em Node.js com Express e interface rápida desenvolvida em Vite.<br><br>
        <b>Como funciona:</b><br>
        • O usuário digita uma palavra-chave no campo de pesquisa;<br>
        • O backend consulta dinamicamente a busca da Amazon utilizando Axios e extrai os detalhes dos itens com JSDOM (título do produto, avaliação média de estrelas, quantidade de avaliações e foto);<br>
        • O frontend em Vite exibe a listagem formatada em cards responsivos e limpos.<br><br>
        <b>Tecnologias:</b> Node.js, Express, Axios, JSDOM, Vite, JavaScript, HTML5 e CSS3.`,
        videoSrc: '',
        coverImg: 'assets/projects/scraping_amazon.svg',
        repository: 'https://github.com/jeansf26/Scraping_Amazon',
        site: ''
    },
    {
        title: 'Grafos e Árvore Binária',
        date: 'Trabalho Acadêmico / Ciência da Computação',
        description: `Projeto prático desenvolvido em Linguagem C para trabalho da faculdade na graduação de Ciência da Computação.<br><br>
        <b>O que implementa:</b><br>
        • Sistema de manipulação de Grafos com representação estruturada, operações de inserção de vértices, arestas e algoritmos de busca;<br>
        • Sistema completo de Árvores Binárias simples com inserção, remoção, percursos e pesquisa de nós;<br>
        • Uso de alocação dinâmica de memória e ponteiros com código limpo em C.<br><br>
        <b>Tecnologias:</b> Linguagem C, Estruturas de Dados, Algoritmos e Ponteiros.`,
        videoSrc: '',
        coverImg: 'assets/projects/grafos_e_arvore_binaria.svg',
        repository: 'https://github.com/jeansf26/Grafos_e_arvore',
        site: ''
    },
    {
        title: 'Catálogo de Filmes',
        date: 'React & Vite',
        description: `Aplicação web moderna desenvolvida em React com Vite que consome uma API externa gratuita de filmes para montar um catálogo dinâmico.<br><br>
        <b>Funcionalidades:</b><br>
        • Busca e exibição interativa de catálogo de filmes via consumo de API REST;<br>
        • Opção de favoritar filmes salvando os títulos preferidos para consulta posterior;<br>
        • Interface fluida e responsiva com componentes reutilizáveis e hooks do React.<br><br>
        <b>Tecnologias:</b> React, Vite, JavaScript, Consumo de APIs REST, CSS3.`,
        videoSrc: '',
        coverImg: 'assets/projects/catalog_movies.svg',
        repository: 'https://github.com/jeansf26/catalog_movies',
        site: 'https://jeansf26.github.io/catalog_movies/'
    },
    {
        title: 'Lista de Tarefas (Task List)',
        date: 'Primeiro Projeto React',
        description: `Aplicação de lista de tarefas desenvolvida como primeiro projeto prático durante o aprendizado de React.<br><br>
        <b>Funcionalidades:</b><br>
        • Inserção, listagem, marcação de tarefas concluídas e remoção rápida de itens;<br>
        • Prática e fixação dos fundamentos de componentes, propriedades (props) e gerenciamento de estado com <code>useState</code>.<br><br>
        <b>Tecnologias:</b> React, JavaScript, HTML5, CSS3.`,
        videoSrc: '',
        coverImg: 'assets/projects/task_list.svg',
        repository: 'https://github.com/jeansf26/task-list_React',
        site: 'https://jeansf26.github.io/task-list_React/'
    },
    {
        title: 'Relógio com JavaScript',
        date: 'JavaScript & DOM',
        description: `Projeto prático de aprendizado e consolidação dos fundamentos de JavaScript e HTML/CSS.<br><br>
        <b>O projeto implementa:</b><br>
        • Relógio analógico de ponteiros com rotação calculada em tempo real sincronizada com o horário local;<br>
        • Temporizador / Cronômetro interativo com contagem regressiva e controle de tempo;<br>
        • Relógio digital com exibição nítida de horas, minutos e segundos.<br><br>
        <b>Tecnologias:</b> JavaScript Vanilla, HTML5, CSS3, Manipulação de DOM.`,
        videoSrc: '',
        coverImg: 'assets/projects/clock_with_JS.svg',
        repository: 'https://github.com/jeansf26/Clock_with_JS',
        site: 'https://jeansf26.github.io/Clock_with_JS/'
    }
];

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line');
    const modal = document.querySelector('.modal');
    const box = document.querySelectorAll('.cards-projects .box');
    const modalTitle = modal.querySelector('.title h2');
    const modalDescription = modal.querySelector('.info p');
    const modalDate = modal.querySelector('.info span');
    const modalLinkProject = modal.querySelector('.links a.link-project');
    const modalLinkRepository = modal.querySelector('.links a.link-repository');
    const videoContainer = modal.querySelector('.video');

    box.forEach((item, index) => {
        const addData = () => {
            const project = dataProjects[index];
            if (!project) return;

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('transparent');

            modalTitle.innerHTML = project.title;
            modalDescription.innerHTML = project.description;
            modalDate.innerHTML = project.date;

            // Link Repository
            if (project.repository) {
                modalLinkRepository.style.display = 'inline-block';
                modalLinkRepository.setAttribute('href', project.repository);
            } else {
                modalLinkRepository.style.display = 'none';
            }

            // Link Site
            if (project.site) {
                modalLinkProject.style.display = 'inline-block';
                modalLinkProject.setAttribute('href', project.site);
            } else {
                modalLinkProject.style.display = 'none';
            }

            // Video / Image Preview
            if (project.videoSrc) {
                videoContainer.innerHTML = `<iframe src="${project.videoSrc}?autoplay=1&amp;loop=0" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>`;
                videoContainer.style.display = 'block';
            } else if (project.coverImg) {
                videoContainer.innerHTML = `<img src="${project.coverImg}" alt="${project.title}" style="width: 100%; max-width: 480px; max-height: 280px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); display: block; margin: 0 auto; box-shadow: 0 4px 20px rgba(0,0,0,0.4); object-fit: contain; background: #13131F;">`;
                videoContainer.style.display = 'flex';
            } else {
                videoContainer.innerHTML = '';
                videoContainer.style.display = 'none';
            }
        };

        item.addEventListener('click', addData);
    });

    const closingModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent');
        videoContainer.innerHTML = '<iframe src="" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>';
    };

    closeModal.addEventListener('click', closingModal);
    document.addEventListener('keydown', (event) => (event.key === 'Escape' ? closingModal() : ''));
};

openModal();
