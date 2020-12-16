export default {
    data: {
        title: "",
        textList:  [{value: 'JS FA'}],
        tab:['/common/images/tab1.png','/common/images/tab2.png','/common/images/tab3.png',]
    },
    onInit() {
        this.title = this.$t('strings.world');
    }
}
