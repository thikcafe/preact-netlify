import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Đối đãi một người qua hiện trạng của anh ta, anh ta sẽ mãi ở hiện trạng ấy.
						Đối đãi một người qua tiềm năng của anh ta, anh ta sẽ trở thành người mà anh 
						ta có thể trở thành và nên trở thành.
					</div>
					<div class={style.author}>-- Goethe</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
					Trang blog là tập hợp những bài blog về các chủ đề công nghệ mà mình yêu thích, 
					và dịch sang tiếng việt để làm nguồn tham khảo cũng như chia sẻ với những bạn 
					có cùng quan tâm.
				</p>
				<p class={style.bioright}>
					Bên cạnh là nguồn tham khảo, trang blog còn là cầu nối cho để mình đến được với
					các bạn có mong muốn trở thành một lập trình viên. Hi vọng có thể chia sẻ kinh nghiệm,
					hay đơn giản là đồng hành cùng các bạn.
				</p>
			</div>
		</div>
	);
};

export default Home;
