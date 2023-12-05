<template>
  <div class="modal-container">
    <header>
      <slot name="header"></slot>
      <!--대체되는 부분-->
    </header>
    <main>
      <slot></slot>
    </main>
    <footet>
      <slot name="footer"></slot>
    </footet>
  </div>
</template>
<!-- 통일성 유지를 위한 -->
