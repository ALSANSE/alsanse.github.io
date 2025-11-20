$(document).ready(function() {
    let allWorks = [];
    let currentCategory = '';

    function getCurrentCategoryFromURL() {
        const pathParts = window.location.pathname.split('/');
        const categories = ["design", "al-bum", "ceramic_plastic", "toybox"];
        let detectedCategory = null;

        // /카테고리명/index.html 또는 /카테고리명/ 형태인지 먼저 확인
        if (pathParts.length > 1) {
            // pathParts = ["", "category", "index.html"] 또는 ["", "category", ""]
            let potentialCategoryName = pathParts[pathParts.length - 2];
            if (categories.includes(potentialCategoryName)) {
                detectedCategory = potentialCategoryName;
            }
        }
        // GitHub Pages 루트의 카테고리 폴더 (예: /프로젝트명/design/)
        if (!detectedCategory && window.location.hostname.includes("github.io")) {
            if (pathParts.length > 2 && categories.includes(pathParts[pathParts.length - 2])) { // /프로젝트명/카테고리/
                 detectedCategory = pathParts[pathParts.length - 2];
            } else if (pathParts.length > 1 && categories.includes(pathParts[1])) { // /프로젝트명/ 이 루트일때 /카테고리/
                // 이 경우는 보통 pathParts[0]에 프로젝트명이 들어감 (github.io/프로젝트명)
                // 그래서 pathParts[1]이 카테고리명이 됨.
                detectedCategory = pathParts[1];
            }
        }


        console.log("Detected category:", detectedCategory);
        return detectedCategory;
    }

    function initializeNewFeaturesContainer() {
        if ($('#alsanseNewFeaturesContainer').length > 0) return;

        const featuresHTML = `
            <div id="alsanseNewFeaturesContainer">
                <button id="closeNewFeaturesBtn">X</button>
                <div class="features-content-wrapper">
                    <h4>태그로 작품 보기:</h4>
                    <div id="newTagsList"></div>
                    <hr>
                    <h4>제목으로 검색:</h4>
                    <input type="text" id="newSearchInput" placeholder="검색할 제목 입력...">
                    <button id="newSearchSubmit">검색</button>
                    <div id="newFilteredWorks"></div>
                </div>
            </div>
        `;
        $('body').append(featuresHTML);

        $('#closeNewFeaturesBtn').on('click', function() {
            $('#alsanseNewFeaturesContainer').hide();
        });

        $('#ct3, #search').off('click').on('click', function(e) {
            e.preventDefault();
            $('#alsanseNewFeaturesContainer').toggle();
            if ($('#alsanseNewFeaturesContainer').is(':visible')) {
                $('#newSearchInput').val('').focus();
                $('#newTagsList button').removeClass('active');
                // 데이터 로드가 완료되었는지 확인 후 목록 표시
                if (allWorks.length > 0) {
                    if (currentCategory) {
                        displayWorks(allWorks.filter(work => work.category === currentCategory));
                    } else {
                        displayWorks(allWorks);
                    }
                } else {
                    // 데이터가 아직 로드되지 않았을 수 있으므로, 로드 함수를 여기서 호출하거나 로딩 메시지 표시
                    // loadWorksData(); // 중복 호출될 수 있으니 주의. 이미 호출됨.
                     $('#newFilteredWorks').html('<li>작품 목록을 불러오는 중...</li>');
                }
            }
        });

        $(document).on('click', function(event) {
            const $container = $('#alsanseNewFeaturesContainer');
            if (!$container.is(event.target) && $container.has(event.target).length === 0 &&
                !$(event.target).is('#ct3') && !$(event.target).closest('#ct3').length &&
                !$(event.target).is('#search') && !$(event.target).closest('#search').length) {
                $container.hide();
            }
        });
        $('#alsanseNewFeaturesContainer').on('click', function(event){
            event.stopPropagation();
        });
    }

    function loadWorksData() {
        let jsonPath;
        currentCategory = getCurrentCategoryFromURL(); // 여기서 currentCategory 설정

        // JSON 경로 결정: currentCategory 유무로 판단
        if (currentCategory) { // 카테고리 페이지 (예: design/index.html)
            jsonPath = '../data/works_data.json';
        } else { // 루트 페이지 (예: index.html)
            jsonPath = 'data/works_data.json';
        }
        console.log("Loading JSON from:", jsonPath);

        $.getJSON(jsonPath)
            .done(function(data) {
                console.log("작품 데이터 로드 성공:", data);
                allWorks = data;
                // currentCategory는 이미 위에서 설정됨
                populateTagsForFiltering();
                // 패널이 이미 열려있을 수도 있으므로, 로드 완료 시 목록 갱신
                if ($('#alsanseNewFeaturesContainer').is(':visible')) {
                    if (currentCategory) {
                        displayWorks(allWorks.filter(work => work.category === currentCategory));
                    } else {
                        displayWorks(allWorks);
                    }
                } else {
                    // 기본적으로는 아무것도 표시하지 않거나, 필요시 초기 목록을 숨겨진 패널에 로드해둘 수 있음.
                    // 여기서는 패널이 열릴 때 displayWorks가 호출되도록 함.
                }
                setupSearchFunctionality();
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("작품 데이터 (" + jsonPath + ") 로드 실패: " + textStatus, errorThrown);
                $('#newFilteredWorks').html('<li>작품 정보를 불러올 수 없습니다. 경로를 확인하세요.</li>');
            });
    }

    function populateTagsForFiltering() {
        if (allWorks.length === 0) return;
        const $tagsContainer = $('#newTagsList');
        $tagsContainer.empty();
        const uniqueTags = [...new Set(allWorks.flatMap(work => work.tags || []))];

        uniqueTags.forEach(tag => {
            const $tagButton = $(`<button class="new-tag-btn" data-tag="${tag}">#${tag}</button>`);
            $tagButton.on('click', function() {
                const selectedTag = $(this).data('tag');
                console.log("Selected tag:", selectedTag);
                const filtered = allWorks.filter(work => (work.tags || []).includes(selectedTag));
                displayWorks(filtered);
                $('.new-tag-btn').removeClass('active');
                $(this).addClass('active');
                $('#newSearchInput').val('');
            });
            $tagsContainer.append($tagButton);
        });
    }

    function setupSearchFunctionality() {
        if (allWorks.length === 0) { // 데이터 없으면 검색 설정 안함
             $('#newSearchSubmit').off('click').on('click', function(){
                $('#newFilteredWorks').html('<li>데이터가 로드되지 않아 검색할 수 없습니다.</li>');
             });
            return;
        }

        $('#newSearchSubmit').off('click').on('click', function() { // 기존 이벤트 핸들러 제거 후 다시 바인딩
            const query = $('#newSearchInput').val().toLowerCase().trim();
            console.log("Search query:", query);
            if (!query) {
                if (currentCategory) {
                    displayWorks(allWorks.filter(work => work.category === currentCategory));
                } else {
                    displayWorks(allWorks);
                }
                $('.new-tag-btn').removeClass('active');
                return;
            }
            const filtered = allWorks.filter(work => work.title && work.title.toLowerCase().includes(query));
            console.log("Search results:", filtered);
            displayWorks(filtered);
            $('.new-tag-btn').removeClass('active');
        });

        $('#newSearchInput').off('keypress').on('keypress', function(e) {
            if (e.which === 13) {
                $('#newSearchSubmit').click();
            }
        });
    }

    function displayWorks(worksToDisplay) {
        const $listContainer = $('#newFilteredWorks');
        $listContainer.empty();

        if (!worksToDisplay || worksToDisplay.length === 0) {
            $listContainer.append('<li>결과 없음</li>');
            return;
        }

        const $ul = $('<ul></ul>');
        worksToDisplay.forEach(work => {
            let workLink = work.link; // JSON에 저장된 링크 (루트 기준 상대 경로 가정: "category/page.html")
            // currentCategory 가 설정되어 있고, 현재 페이지가 해당 카테고리 페이지 내부일 경우 경로 조정
            if (currentCategory && window.location.pathname.includes(`/${currentCategory}/`)) {
                if (work.link && work.link.startsWith(currentCategory + "/")) {
                    workLink = work.link.substring(currentCategory.length + 1); // "page.html"
                } else if (work.link && !work.link.startsWith('../') && !work.link.startsWith('http')) {
                    // 다른 카테고리거나, 경로가 루트부터 시작하지 않는 경우 (예: 그냥 "otherpage.html")
                    // 이 경우는 ../ 를 붙여서 루트로 한번 나간 후 전체 경로를 타도록 함
                    workLink = "../" + work.link;
                }
                // work.link가 이미 "../다른카테고리/page.html" 형태면 그대로 사용됨.
            }
            // 루트 페이지거나 currentCategory가 없는 경우, JSON의 work.link (루트 기준)를 그대로 사용

            $ul.append(`<li><a href="${workLink}">${work.title} <span class="work-cat-display">(${work.categoryKo})</span></a></li>`);
        });
        $listContainer.append($ul);
    }

    if ($('#remote').length > 0) {
        initializeNewFeaturesContainer();
        loadWorksData(); // 데이터 로드 함수 호출 위치 변경 (initialize 후 바로)
    }
});