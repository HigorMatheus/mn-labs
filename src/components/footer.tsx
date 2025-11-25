import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
	return (
		<footer id="sobre" className="border-t border-border/40 bg-card/30">
			<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
					<div className="lg:col-span-2">
						<div className="flex items-center gap-2 mb-4">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
								<Image
									src="/logo_mn.png"
									alt="logo MN Labs"
									width={40}
									height={40}
									className="rounded-lg"
								/>
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-bold text-foreground">
									{" "}
									MN Labs{" "}
								</span>
								<span className="text-xs">technology</span>
							</div>
						</div>
						<p className="text-muted-foreground leading-relaxed max-w-md mb-6">
							Especialistas em desenvolvimento React, criando aplicações web
							modernas e escaláveis para empresas que buscam excelência técnica.
						</p>
						<div className="flex gap-4">
							<a
								href="#github"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Github className="h-5 w-5" />
							</a>
							<a
								href="#linkedin"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Linkedin className="h-5 w-5" />
							</a>
							<a
								href="#twitter"
								className="text-muted-foreground hover:text-foreground transition-colors"
							>
								<Twitter className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* <div>
						<h3 className="text-sm font-semibold text-foreground mb-4">
							Serviços
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Desenvolvimento React
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Next.js & SSR
								</a>
							</li>
							<li>
							
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Design Systems
								</a>
							</li>
						</ul>
					</div> */}

					{/* <div>
						<h3 className="text-sm font-semibold text-foreground mb-4">
							Empresa
						</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="#sobre"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Sobre Nós
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Portfólio
								</a>
							</li>
							<li>
								<a
									href="#blog"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="#contato"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Contato
								</a>
							</li>
						</ul>
					</div> */}
				</div>

				<div className="mt-12 border-t border-border/40 pt-8">
					<p className="text-center text-sm text-muted-foreground">
						© {new Date().getFullYear()} MN Labs technology. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
