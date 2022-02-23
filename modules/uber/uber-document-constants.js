/**
 * Uber売り上げPDF用の定数
 */
class UberDocumentConstants {
    /**
     * 明細の売り上げの最初のページのインデックス
     * （PDF.jsでは 1 ）
     */
    static get UBER_SALE_FIRST_PAGE_INDEX() {
        return 1;
    }

    /**
     * 明細の売り上げの中の取得するページ数
     * 1ページ目：売り上げ、支払いなど
     * 2ページ目：サービス料
     */
    static get UBER_SALE_PAGE_NUM() {
        return 2;
    }

    /**
     * RegExp.execの結果のインデックス
     * 参考 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#description
     */
    static get REGEXP_EXEC_RESULT_INDEX() {
        return 0;
    }

    /**
     * RegExp.execの、（）で囲まれた部分の結果が入るインデックス
     * 参考 https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#description
     */
    static get REGEXP_EXEC_PART_INDEX() {
        return 1;
    }

    /**
     * Uberの日付の区切り文字（/）
     */
     static get UBER_DATE_SEPARATOR() {
        return "/";
    }

   

    static #UBER_START_DATE_PATTERN = new RegExp('(\\d+/\\d+/\\d+)');
    /**
     * 売り上げの週の始まりの日付のパターン（振込日に年が書いてないため取得の必要がある）
     * 例：2021/05/03 にマッチして、2021/05/03を返す
     */
    static get UBER_START_DATE_PATTERN() {
        return this.#UBER_START_DATE_PATTERN;
    }

    static #UBER_END_DATE_PATTERN = new RegExp('- (\\d+/\\d+/\\d+)');
    /**
     * 売り上げの週の終わりの日付のパターン
     * 例：- 2021/05/10 にマッチして、2021/05/10を返す
     */
    static get UBER_END_DATE_PATTERN() {
        return this.#UBER_END_DATE_PATTERN;
    }


    static #UBER_SALE_LABEL_PATTERN = new RegExp('売り上げ');
    /**
     * 売り上げのラベルのパターン
     * 例：売り上げ
     */
    static get UBER_SALE_LABEL_PATTERN() {
        return this.#UBER_SALE_LABEL_PATTERN;
    }

    
    static #UBER_SALE_REVERT_PATTERN = new RegExp('の明細');
    /**
     * 売り上げの解析をキャンセルし、元に戻す条件
     * （なんとPDF内の週ごとの概要が短いと、下にある「売り上げの明細」が先に読み込まれてしまう）
     */
    static get UBER_SALE_REVERT_PATTERN() {
        return this.#UBER_SALE_REVERT_PATTERN;
    }


    static #UBER_INTEGER_PATTERN = new RegExp('[\\d,]*\\d');
    /**
     * 整数のパターン
     * 例：23,177
     */
    static get UBER_INTEGER_PATTERN() {
        return this.#UBER_INTEGER_PATTERN;
    }


    static #UBER_REPAYMENT_LABEL_PATTERN = new RegExp('返金と経費');
    /**
     * 返金と経費のラベルのパターン
     * 例：返金と経費
     */
    static get UBER_REPAYMENT_LABEL_PATTERN() {
        return this.#UBER_REPAYMENT_LABEL_PATTERN;
    }


    static #UBER_CASH_LABEL_PATTERN = new RegExp('受け取った現金');
    /**
     * 受け取った現金のラベルのパターン
     * 例：受け取った現金
     */
    static get UBER_CASH_LABEL_PATTERN() {
        return this.#UBER_CASH_LABEL_PATTERN;
    }


    static #UBER_DEPOSIT_LABEL_PATTERN = new RegExp('に銀行口座に振り込まれました');
    /**
     * 振り込みのラベルのパターン
     * 例：に銀行口座に振り込まれました
     */
    static get UBER_DEPOSIT_LABEL_PATTERN() {
        return this.#UBER_DEPOSIT_LABEL_PATTERN;
    }

    
    static #UBER_FEE_LABEL_PATTERN = new RegExp('サービス料');
    /**
     * サービス料（支払い手数料）のラベルのパターン
     * 例：サービス料
     */
    static get UBER_FEE_LABEL_PATTERN() {
        return this.#UBER_FEE_LABEL_PATTERN;
    }

    static #TODAY = new Date();
    /**
     * 今日の日付を返す（口座振込年が取得できなかった場合は一応前年を設定するため）
     */
    static get TODAY() {
        return this.#TODAY;
    }
}