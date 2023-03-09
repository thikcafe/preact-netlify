import { h } from 'preact';
import style from './style';

const photographs = (props) => {
	return (
		<div class={style.pageContact}>
			<h1 class={style.pageTitle}>About me</h1>
			<div class={style.formWrapper}>
				<p class={style.pageBody}>
					<p>
						Mình là một frontend developer, có một thời gian làm việc ở FPT. Hiện mình đã nghỉ 
						và có nguyện vọng hướng dẫn các bạn (đặc biệt những bạn khiếm khuyết) có mong muốn tìm hiểu về lập trình web. 
						<b> Công việc của mình là hỗ trợ Mentor 1:1 đối với các công nghệ như Html&Css, Javascript, và React.</b> 
						{/* Ngoài ra mình cũng cung cấp một lộ trình đầy đủ từ bắt đầu cho đến khi trở thành một frontend developer (giáo trình và chứng chỉ nước ngoài) */}
					</p>
					<p>
						Nếu các bạn có băn khoăn về tài chính, thì đừng quá lo lắng. Tất cả những gì các 
						bạn cần là một máy tính kết nối và một sự yêu thích với công nghệ. Mình hi vọng giới thiệu với các bạn niềm vui của việc lập trình. 
						Vì cá nhân mình tin kiến thức mang lại niềm vui, và kỹ năng lập trình cũng hữu ích ngày nay.
					</p>
					<p>
						Các bạn có thể mail cho mình qua địa chỉ - naive-coder@outlook.com.
					</p>
					<p>
						Hẹn gặp các bạn!!
					</p>
				</p>
				{/* <form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<input type="text" name="name" placeholder="Name" required />
					</p>
					<p>
						<input type="email" name="email" placeholder="E-Mail" required />
					</p>
					<p>
						<textarea name="message" placeholder="Message" />
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form> */}
			</div>
		</div>
	);
};

export default photographs;
