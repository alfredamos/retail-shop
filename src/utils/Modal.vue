<template>
  <div className="overlay">
      <div className="card shadow-lg p-5 border-2 border-primary mx-auto wth">
        <slot></slot>
      </div>
    </div>,
</template>

<script lang="ts" setup>

</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modale {
  width: 600px;
  margin: 100px auto;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  /* overflow-y: hidden; */
}

.modale-body {
    max-height: calc(100vh - 210px);
    overflow-y: auto;
}


.wth{
  width: 40%;
}


</style>