<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <BannersTilte :title="title" :desc="desc" ></BannersTilte>
      <section class="pt-5 pb-5">
        <h5 class="text-center">產品相關問題</h5>
        <div class="container">
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-5 pb-5" style="background: #f1f1f1">
        <h5 class="text-center">營運相關問題</h5>
        <div class="container">
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-5 pb-5">
        <h5 class="text-center">技術相關問題</h5>
        <div class="container">
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
          <div
            class="panel-group row mb-3"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >Collapsible Group Item #1</a>
                </h4>
              </div>
              <div
                id="collapseOne"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >Collapsible Group Item #2</a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="panel panel-default col-md-4">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a
                    class="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >Collapsible Group Item #3</a>
                </h4>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div class="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                  Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                  ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                  accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-center pt-3 pb-5">
        <h1>還是不夠了解嗎?</h1>
        <button type="button" class="btn btn-primary">預約諮詢</button>
      </section>
      <Footers></Footers>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title:'常見問題',
      desc:'常見問題balabalabalabala',
    };
  },
  created() {
    console.log(1235555);
  }
};
</script>

<style>
</style>
