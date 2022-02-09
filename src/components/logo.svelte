<script>
    import {persionalization} from '../config'
</script>

<a aria-label="{persionalization.PAGE_URL}" href={persionalization.PAGE_URL} target="blank">
    <div id="logo" style="background-image: url('{persionalization.LOGO_URL}');"></div>
</a>

<style>
    #logo{
        position: fixed;
        top: 20px;
        left: 20px;
        height: 75px;
        width: 75px;
        background-color: #333;
        border-radius: 50%;
        box-shadow: 0 0 3px rgba(0,0,0,.5);
        background-size: 70%;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>